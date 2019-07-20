import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NowPlayingGrid from './NowPlayingGrid';

const NowPlaying = () => {
  // state hook
  const [nowPlaying, setNowPlaying] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/nowplaying`;
      const response = await axios.get(url);

      // set state
      setNowPlaying(response.data.nowPlaying);
    };

    // call
    fetchNowPlaying();
  }, []);

  return (
    <div>
      <NowPlayingGrid nowPlaying={nowPlaying}/>
    </div>
  );
};

export default NowPlaying;