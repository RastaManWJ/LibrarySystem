import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DeleteList from './DeleteList'
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
  
  const SearchBys = [
    {id: 0, name: "Title"},
    {id: 1, name: "Author"},
    {id: 2, name: "Publisher"},
    {id: 3, name: "ISBN"},
    {id: 4, name: "Category"}
];

class Delete extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            books: [],
            columnToQuery: "Title",
            query: ''
        };
    }

    handleRemove(id) {
        console.log(id);
        axios.post("http://localhost:5000/api/books/:id", {'id': id})
        .then(res => {
            console.log(res);
            const newBooks = this.state.books.filter(book => {return book._id !== id});
            this.setState({
                books: newBooks
            });

        })
        .catch(e => console.log(e));
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/books/browse")
                .then(res => {this.setState({books: res.data})})
                .catch(e => console.log(e));
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        }); 
    };

    render(){
        const { classes } = this.props;
        const { books, query, columnToQuery } = this.state;

        const filteredBooks = books.filter(book => {
            return book[columnToQuery.toLowerCase()].toLowerCase().includes(query.toLowerCase());
        });

        if(this.state.books.length){
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="FindBox"
                        label="Find"
                        value={this.state.query}
                        className={classes.textField}
                        onChange={this.handleChange('query')}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    
                    <TextField
                        id="SearchByBox"
                        select
                        label="Search by"
                        className={classes.textField}
                        value={this.state.columnToQuery}
                        onChange={this.handleChange('columnToQuery')}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select your desired option"
                        margin="normal"
                        variant="outlined"
                    >
                        {SearchBys.map(option => (
                            <MenuItem key={option.id} value={option.name}>
                            {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    
                </form>
                <DeleteList books={filteredBooks} handleRemove={this.handleRemove}/>
            </div>
        );
        }
        else {
            return (
            <div>
                Brak danych
            </div>
            );
        }
    }
}

Delete.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Delete);