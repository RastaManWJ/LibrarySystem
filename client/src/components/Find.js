import React from 'react';
import PropTypes from 'prop-types';
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
    {id: 4, name: "Category"},
    {id: 5, name: "Key Words"}
];

class Find extends React.Component {
  state = { 
      columnToQuery: "Title",
      query: ''
   };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
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
          id="outlined-select-currency"
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
    );
  }
}

Find.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Find);