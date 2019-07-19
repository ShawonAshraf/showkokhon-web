import React from 'react';

import PlayingAtCard from './PlayingAtCard';

const ScheduleDetails = (props) => {
  const { movie } = props;
  const { schedule } = movie;

  return (
    <div>
      <h2>{movie.name} on {movie.mediaType}</h2>
      {
        schedule.map((sc, index) => <div key={index}>
          <h3>{sc.date}</h3>
          {
            sc.playingAt.map((pl, index) => <PlayingAtCard key={index} playingAt={pl}/>)
          }
        </div>)
      }
    </div>
  );
};

export default ScheduleDetails;