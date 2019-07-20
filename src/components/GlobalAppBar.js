import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MovieRoll from 'mdi-material-ui/MovieRoll';
import HomeCircle from 'mdi-material-ui/HomeCircle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: [
      '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'sans-serif'
    ].join(''),
    fontWeight: 'bold',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
}));

const GlobalAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => window.location.href= '/' }
          >
            <MovieRoll />
          </IconButton>
          <Typography
            variant="h5"
            className={classes.title}
          >
            Showkokhon
          </Typography>
          <IconButton
            color="inherit"
            arial-lable="Home"
            onClick={() => window.location.href= '/' }
          >
            <HomeCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GlobalAppBar;