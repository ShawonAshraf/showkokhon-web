import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MovieRoll from 'mdi-material-ui/MovieRoll';
import HomeCircle from 'mdi-material-ui/HomeCircle';
import GithubCircle from 'mdi-material-ui/GithubCircle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
            onClick={() => window.location.href = '/'}
          >
            <MovieRoll />
          </IconButton>
          <Typography
            variant="h5"
            className={classes.title}
          >
            Showkokhon
          </Typography>

          {/* Github button */}
          <IconButton
            color="inherit"
            arial-lable="Github"
            onClick={() => window.location.href = 'https://github.com/ShawonAshraf/showkokhon-web'}
          >
            <GithubCircle />
          </IconButton>

          {/* home button */}
          <IconButton
            color="inherit"
            arial-lable="Home"
            onClick={() => window.location.href = '/'}
          >
            <HomeCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GlobalAppBar;
