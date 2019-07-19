import axios from 'axios';

export const fetchNowPlaying = async () => {
  const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/nowplaying`;
  const response = await axios.get(url);
  return response.data.nowPlaying;
};
