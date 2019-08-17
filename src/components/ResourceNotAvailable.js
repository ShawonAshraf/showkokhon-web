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
      <h1>{props.message}</h1>
    </div>
  );
};

export default ResourceNotAvailable;
