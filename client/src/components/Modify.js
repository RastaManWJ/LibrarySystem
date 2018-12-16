import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModifyList from './ModifyList'
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

class Modify extends Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleModify = this.handleModify.bind(this);
        this.startEditing = this.startEditing.bind(this);
        this.stopEditing = this.stopEditing.bind(this);
        this.state = {
            books: [],
            columnToQuery: "Title",
            query: '',
            editIdx: -1
        };
    }

    handleModify(id) {
        console.log(id);
        const newBook = {
            '_id': id,
            title: document.getElementById('TitleCell').value,
            author: document.getElementById('AuthorCell').value,
            isbn: document.getElementById('ISBNCell').value,
            publisher: document.getElementById('PublisherCell').value,
            release: document.getElementById('ReleaseCell').value,
            releaseDate: document.getElementById('ReleaseDateCell').value,
            numberOfPages: document.getElementById('NumberOfPagesCell').value,
            language: document.getElementById('LanguageCell').value,
            category: document.getElementById('CategoryCell').value,
            keywords: document.getElementById('KeywordsCell').value,
            description: document.getElementById('DescriptionCell').value,
        }

        console.log(newBook);
        axios.post("http://localhost:5000/api/books/edit", newBook)
        .then(res => {
            let tempBooks = this.state.books;
            for(var x in tempBooks){
                if (tempBooks[x]._id === id){
                    tempBooks[x] = newBook;
                    this.setState({
                        books: tempBooks
                    })
                    break;
            }
        }
        })
        .catch(e => alert("* This field is required!"));

        
    }

    startEditing(id) {
        this.setState({
            editIdx: id
        })
       
    }

    stopEditing(id) {
        this.handleModify(id);
        this.setState({
            editIdx: -1
        })
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
                <ModifyList 
                books={filteredBooks} 
                handleChange={this.handleChange}
                startEditing={this.startEditing}
                stopEditing={this.stopEditing}
                editIdx={this.state.editIdx}
                />
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

Modify.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(Modify);