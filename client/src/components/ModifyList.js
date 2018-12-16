import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    width: 1000
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

function ModifyList(props) {
  const { classes, books, handleChange, startEditing, stopEditing, editIdx } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Publisher</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Release</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>Number of Pages</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Keywords</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Modify Book</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => {
            const currentlyEditing = editIdx === book._id;
            return (
              <TableRow key={book._id}>
                <TableCell component="th" scope="row">
                  {currentlyEditing ? 
                    <TextField
                    key={"TitleCell"+book._id}
                    id="TitleCell" 
                    label="Title" 
                    defaultValue={book.title}
                    className={classes.textField} 
                    required 
                    onChange={handleChange('title')} 
                     />
                    : book.title}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"AuthorCell"+book._id}
                    id="AuthorCell" 
                    label="Author" 
                    defaultValue={book.author}
                    className={classes.textField} 
                    required 
                    onChange={handleChange('author')} 
                     />
                    : book.author}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"PublisherCell"+book._id}
                    id="PublisherCell" 
                    label="Publisher" 
                    defaultValue={book.publisher}
                    className={classes.textField} 
                    required 
                    onChange={handleChange('publisher')} 
                     />
                    : book.publisher}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"ISBNCell"+book._id}
                    id="ISBNCell" 
                    label="ISBN" 
                    defaultValue={book.isbn}
                    className={classes.textField} 
                    required 
                    onChange={handleChange('isbn')} 
                     />
                    : book.isbn}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"ReleaseCell"+book._id}
                    id="ReleaseCell" 
                    label="Release"
                    defaultValue={book.release}
                    className={classes.textField} 
                    onChange={handleChange('release')} 
                     />
                    : book.release}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"ReleaseDateCell"+book._id}
                    id="ReleaseDateCell" 
                    label="Release Date" 
                    defaultValue={book.releaseDate.split('T')[0]}
                    className={classes.textField} 
                    required 
                    onChange={handleChange('releaseDate')}
                    type="date"
                     />
                    : book.releaseDate.split('T')[0]}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"NumerOfPagesCell"+book._id}
                    id="NumberOfPagesCell" 
                    label="Pages"
                    defaultValue={book.numberOfPages} 
                    className={classes.textField} 
                    required 
                    onChange={handleChange('numberOfPages')} 
                    
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}/> 
                    : book.numberOfPages}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"LanguageCell"+book._id}
                    id="LanguageCell" 
                    label="Language" 
                    defaultValue={book.language}
                    className={classes.textField}  
                    onChange={handleChange('language')} 
                     />
                    : book.language}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"CategoryCell"+book._id}
                    id="CategoryCell" 
                    label="Category" 
                    defaultValue={book.category}
                    className={classes.textField}
                    onChange={handleChange('category')} 
                     />
                    : book.category}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"KeywordsCell"+book._id}
                    id="KeywordsCell" 
                    label="Keywords" 
                    defaultValue={book.keywords}
                    className={classes.textField}  
                    onChange={handleChange('keywords')} 
                     />
                    : book.keywords}
                </TableCell>
                <TableCell>
                {currentlyEditing ? 
                    <TextField 
                    key={"DescriptionCell"+book._id}
                    id="DescriptionCell" 
                    label="Description" 
                    defaultValue={book.description}
                    className={classes.textField}
                    onChange={handleChange('description')} 
                     />
                    : book.description}
                </TableCell>
                <TableCell>
                    {currentlyEditing ? 
                    (<Icon onClick={() => stopEditing(book._id)}>
                    {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
                    <Icon className={classes.rightIcon}>check</Icon></Icon>)
                    :
                    (<Icon onClick={() => startEditing(book._id)}>
                    {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
                    <Icon className={classes.rightIcon}>edit</Icon></Icon>)
                    }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ModifyList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModifyList);