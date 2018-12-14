import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';

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

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator=" "
      />
    );
    }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = { 
            title: '',
            author: '',
            publisher: '',
            isbn: '',
            release: '',
            releaseDate: '1990-01-01',
            numberOfPages: '',
            language: '',
            category: '',
            keyWords: '',
            description: '',
         };
    }
  

   submitHandler() {
        console.log("submitHandler");
        axios.post('http://localhost:5000/api/books/add', this.state)
            .then(res => {console.log(res)})
            .catch(e => console.log(e));
   };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off" id="myForm">
        <TextField
          id="TitleBox"
          label="Title"
          className={classes.textField}
          required
          onChange={this.handleChange('title')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="AuthorBox"
          label="Author"
          className={classes.textField}
          required
          onChange={this.handleChange('author')}
          margin="normal"
          variant="outlined"
        /> 
        <TextField
          id="PublisherBox"
          label="Publisher"
          className={classes.textField}
          required
          onChange={this.handleChange('publisher')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="ISBNBox"
          label="ISBN"
          className={classes.textField}
          required
          onChange={this.handleChange('isbn')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="ReleaseBox"
          label="Release"
          className={classes.textField}
          onChange={this.handleChange('release')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="ReleaseDateBox"
          label="Release Date"
          defaultValue={this.state.releaseDate}
          className={classes.textField}
          required
          onChange={this.handleChange('releaseDate')}
          margin="normal"
          variant="outlined"
          type="date"
        />
        <TextField
          id="NumberOfPagesBox"
          label="Number of Pages"
          className={classes.textField}
          required
          onChange={this.handleChange('numberOfPages')}
          margin="normal"
          variant="outlined"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        <TextField
          id="LanguageBox"
          label="Language"
          className={classes.textField}
          onChange={this.handleChange('language')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="Category"
          label="CategoryBox"
          className={classes.textField}
          onChange={this.handleChange('category')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="KeyWordsBox"
          label="Key Words"
          className={classes.textField}
          onChange={this.handleChange('keyWords')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="DescriptionBox"
          label="Description"
          className={classes.textField}
          multiline
          onChange={this.handleChange('description')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" fullWidth color="secondary" onClick={this.submitHandler} className={classes.button}>
        Submit
        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
        <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </form>
    );
  }
}

Add.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Add);