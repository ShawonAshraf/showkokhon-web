import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NowPlayingGrid from './NowPlayingGrid';
import ResourceNotAvailable from './ResourceNotAvailable';
import ServiceNotAvailable from './ServiceNotAvailable';

const NowPlaying = () => {
  // state hook
  const [nowPlaying, setNowPlaying] = useState([]);
  const [statusCode, setStatusCode] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/nowplaying`;
        const response = await axios.get(url);

        // set state
        setNowPlaying(response.data.nowPlaying);
        setStatusCode(response.status);
      } catch (e) {
        setStatusCode(e.reponse ? e.response.status : 500);
      }
    };

    // call
    fetchNowPlaying();
  }, []);

  switch (statusCode) {
    case 200:
      return (
        <div>
          <h2>Now Playing</h2>
          <NowPlayingGrid nowPlaying={nowPlaying} />
        </div>
      );
    case 404:
      return <ResourceNotAvailable
        message={'Our databases have nothing to show at the moment sadly. :('}
      />;
    case 500:
      return <ServiceNotAvailable />;
    default:
      return <p>Loading</p>;
  }
};

export default NowPlaying;
