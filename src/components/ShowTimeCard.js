import React from 'react';

const ShowTimeCard = (props) => {
  const { showTimes } = props;

  return (
    <div>
      <ul>
        {
          showTimes.map((showTime, index) => <li key={index}>{showTime}</li>)
        }
      </ul>
    </div>
  );
};

export default ShowTimeCard;