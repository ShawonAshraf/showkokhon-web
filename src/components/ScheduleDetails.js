import React from 'react';

import PlayingAtCard from './PlayingAtCard';

const ScheduleDetails = (props) => {
  const { movie } = props;
  const { schedule } = movie;

  return (
    <div>
      {
        schedule.map((sc, index) => <div key={index}>
          <h3>{sc.date}</h3>
          {
            sc.playingAt.map((pl, index) => <PlayingAtCard
              key={index}
              playingAt={pl}
              mediaType={movie.mediaType}/>)
          }
        </div>)
      }
    </div>
  );
};

export default ScheduleDetails;