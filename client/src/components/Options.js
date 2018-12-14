import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {NavLink} from 'react-router-dom';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Options(props) {
  const { classes } = props;
  return (
    <div>
      <Button component={NavLink} to="/Browse" color="primary" variant="contained" className={classes.button}>
        Browse
        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
        <Icon className={classes.rightIcon}>search</Icon>
      </Button>
      <Button component={NavLink} to="/Add" color="primary" variant="contained" className={classes.button}>
        Add
        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
        <Icon className={classes.rightIcon}>add</Icon>
      </Button>
      <Button component={NavLink} to="/Delete" color="primary" variant="contained" className={classes.button}>
        Delete
        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
        <Icon className={classes.rightIcon}>delete</Icon>
      </Button>
      <Button component={NavLink} to="/Modify" color="primary" variant="contained" className={classes.button}>
        Modify
        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}
        <Icon className={classes.rightIcon}>edit</Icon>
      </Button>
    </div>
  );
}

Options.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);
