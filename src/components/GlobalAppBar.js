import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MovieRoll from 'mdi-material-ui/MovieRoll';
import HomeCircle from 'mdi-material-ui/HomeCircle';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import About from 'mdi-material-ui/Information';

import AppBarElevation from './AppBarElevation';

import { navigateTo } from '../util/navigator';

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



const GlobalAppBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarElevation {...props} >
        <AppBar>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Home"
              onClick={() => navigateTo('/')}
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
              onClick={() => navigateTo('https://github.com/ShawonAshraf/showkokhon-web')}
            >
              <GithubCircle />
            </IconButton>

            {/* home button */}
            <IconButton
              color="inherit"
              arial-lable="Home"
              onClick={() => navigateTo('/')}
            >
              <HomeCircle />
            </IconButton>

            {/* about button */}
            <IconButton
              color="inherit"
              arial-lable="About"
              onClick={() => navigateTo('/info')}
            >
              <About />
            </IconButton>
          </Toolbar>
        </AppBar>
      </AppBarElevation>
      <Toolbar />
    </div>
  );
};

export default GlobalAppBar;
