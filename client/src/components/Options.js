import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
      <NavLink to="/Browse"><Button variant="contained" className={classes.button}>
        Browse
      </Button></NavLink>
      <NavLink to="/Add"><Button variant="contained" className={classes.button}>
        Add
      </Button></NavLink>
      <NavLink to="/Delete"><Button variant="contained" className={classes.button}>
        Delete
      </Button></NavLink>
      <NavLink to="/Modify"><Button variant="contained" className={classes.button}>
        Modify
      </Button></NavLink>
    </div>
  );
}

Options.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);
