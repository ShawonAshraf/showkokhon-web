import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const ResourceNotAvailable = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>{props.message}</h3>
    </div>
  );
};

export default ResourceNotAvailable;
