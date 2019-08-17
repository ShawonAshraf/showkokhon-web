import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import NowPlaying from './NowPlaying';
import ServiceNotAvailable from './ServiceNotAvailable';
import ResourceNotAvailable from './ResourceNotAvailable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

const getComponentBasedOnStatusCode = (code) => {
  switch (code) {
    case 200:
      return <NowPlaying />;

    case 404:
      return <ResourceNotAvailable
        message={'Our databases have nothing to show at the moment sadly. :('}
      />;
    case 505:
      return <ServiceNotAvailable />;
    default:
      return <p>Loading!</p>
  }
};

const Home = () => {
  const classes = useStyles();

  // state hook
  const [apiStatus, setApiStatus] = useState([]);

  useEffect(() => {
    const getApiStatus = async () => {
      const url = `${process.env.REACT_APP_API_ROOT_URL}/`;
      const result = await axios.get(url);

      setApiStatus(result.status);
    }

    getApiStatus();
  })

  return (
    <div className={classes.root}>
      {getComponentBasedOnStatusCode(apiStatus)}
    </div>
  )
};

export default Home;
