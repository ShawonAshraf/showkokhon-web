import React from 'react';

import ShowTimeCard from './ShowTimeCard';

const PlayingAtCard = (props) => {
  const { playingAt, mediaType } = props;

  return (
    <div>
      <h4>{playingAt.cinemaId === 0? 'Star Cineplex' : 'Blockbuster Cinemas'} ({mediaType})</h4>
      <em>{playingAt.locationName}</em>
      <ShowTimeCard showTimes={playingAt.showTimes}/>
    </div>
  );
};

export default PlayingAtCard;