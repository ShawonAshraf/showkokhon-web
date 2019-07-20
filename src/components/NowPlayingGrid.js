import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MovieCard from './MovieCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const NowPLayingGrid = (props) => {
  const { nowPlaying } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        nowPlaying.length === 0 ? <p>Loading!</p> : <Grid container spacing={1}>
          {
            nowPlaying.map((res, index) => <Grid key={index} item xs={3}>
              <MovieCard
                key={index}
                name={res._id.name}
                imageUrl={res._id.imageUrl}
              />
            </Grid>)
          }
        </Grid>
      }

    </div>
  );
};

export default NowPLayingGrid;