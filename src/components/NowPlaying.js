import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

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
      {nowPlaying.length === 0 ? <p>Loading!</p> : <ul>
        {
          nowPlaying.map((res, index) => <li key={index}>
            <MovieCard
              key={index}
              name={res._id.name}
              imageUrl={res._id.imageUrl}
            />
          </li>)
        }
      </ul>}
    </div>
  );
};

export default NowPlaying;