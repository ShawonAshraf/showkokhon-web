import React from 'react';

const ScheduleDetail = (props) => {
  const { movie } = props;
  const { schedule } = movie;

  return (
    <div>
      {
        schedule.map((sc, index) => <div key={index}>
          <h3>{sc.date}</h3>
          {
            <ul>
              { sc.playingAt.map(pl => pl.showTimes.map((showTime, index) => <li key={index}>{showTime}</li>))}
            </ul>
          }
        </div>)
      }
    </div>
  );
};

export default ScheduleDetail;