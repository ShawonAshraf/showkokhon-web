import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NowPlaying from './NowPlaying';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Now Playing</h2>
      <NowPlaying />
    </div>
  );
};

export default Home;