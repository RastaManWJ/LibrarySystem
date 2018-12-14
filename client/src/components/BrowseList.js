import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function BrowseList(props) {
  const { classes } = props;

  const books = props.items.books;

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
            <TableCell>Key Words</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map(book => {
            return (
              <TableRow key={book._id}>
                <TableCell component="th" scope="row">
                  {book.title}
                </TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publisher}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.release}</TableCell>
                <TableCell>{book.releaseDate}</TableCell>
                <TableCell>{book.numberOfPages}</TableCell>
                <TableCell>{book.language}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>{book.keyWords}</TableCell>
                <TableCell>{book.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

BrowseList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrowseList);