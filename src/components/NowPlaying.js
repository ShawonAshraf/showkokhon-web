import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NowPlayingGrid from './NowPlayingGrid';
import ResourceNotAvailable from './ResourceNotAvailable';

const NowPlaying = () => {
  // state hook
  const [nowPlaying, setNowPlaying] = useState([]);
  const [statusCode, setStatusCode] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/nowplaying`;
      const response = await axios.get(url);

      // set state
      setNowPlaying(response.data.nowPlaying);
      setStatusCode(response.status);
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
      return (
        <div>
          <ResourceNotAvailable />
        </div>
      );
    default:
      return (
        <p>Loading</p>
      );
  }
};

export default NowPlaying;
