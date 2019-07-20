import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#000',
  },
}));

const ShowTimeCard = (props) => {
  const { showTimes } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction={'row'} spacing={3}>
        {
          showTimes.map((showTime, index) => <Grid key={index} item xs={6} md={3}>
            <Paper className={classes.paper}>{showTime}</Paper>
            </Grid>)
        }
      </Grid>
      <ul>

      </ul>
    </div>
  );
};

export default ShowTimeCard;