import React from 'react';

import ShowTimeCard from './ShowTimeCard';

const PlayingAtCard = (props) => {
  const { playingAt, mediaType } = props;

  return (
    <div>
      <h4>{playingAt.cinemaId === 0? 'Star Cineplex' : 'Blockbuster Cinemas'} ({mediaType})</h4>
      <h5>@{playingAt.locationName}</h5>
      <ShowTimeCard showTimes={playingAt.showTimes}/>
    </div>
  );
};

export default PlayingAtCard;