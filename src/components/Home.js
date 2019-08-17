import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import NowPlaying from './NowPlaying';
import ServiceNotAvailable from './ServiceNotAvailable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

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
      {
        apiStatus === 200 ? <NowPlaying /> : <ServiceNotAvailable />
      }
    </div>
  );
};

export default Home;
