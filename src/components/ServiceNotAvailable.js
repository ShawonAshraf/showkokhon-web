import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const ServiceNotAvailable = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Service not available at the moment.</h2>
      <h3>Please visit this page later!</h3>
    </div>
  );
};

export default ServiceNotAvailable;
