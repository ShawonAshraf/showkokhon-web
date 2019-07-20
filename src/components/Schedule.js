import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScheduleDetails from './ScheduleDetails';

const Schedule = (props) => {
  // state hook
  const [state, setState] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchSchedule = async (name) => {
      const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/byname?name=${name}`;
      const response = await axios.get(url);

      // set state
      setState(response.data);
    };

    fetchSchedule(props.movieName);
  }, [props.movieName]);

  return(
    <div>
      <h1 className={'movie-name-header'} align='center'>{props.movieName}</h1>
      <div className={'schedule-details'}>
        {
          state.length === 0 ? <p>Loading!</p> : state.map(movie => <ScheduleDetails
            key={movie._id}
            movie={movie}
          />)
        }
      </div>
    </div>
  );
};

export default Schedule;