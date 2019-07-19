import React, { useState, useEffect } from 'react';
import axios from "axios";

const Home = () => {
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
      <h1>Showkokhon</h1>
      {nowPlaying.length === 0 ? <p>Loading!</p> : <ul>
        {
          nowPlaying.map(movie => <li key={movie}>
            <a href={`schedule/${movie}`}>{movie}</a>
          </li>)
        }
      </ul>}
    </div>
  );
};

export default Home;