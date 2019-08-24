import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScheduleDetails from './ScheduleDetails';
import ResourceNotAvailable from './ResourceNotAvailable';
import ServiceNotAvailable from './ServiceNotAvailable';

const Schedule = (props) => {
  // state hook
  const [state, setState] = useState([]);
  const [statusCode, setStatusCode] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchSchedule = async (name) => {
      try {
        // encode name as uri component
        const encodedName = encodeURIComponent(name);
        const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/byname?name=${encodedName}`;
        const response = await axios.get(url);

        console.log(response.status);

        // set state
        setState(response.data);
        setStatusCode(response.status);
      } catch (e) {
        const code = e.response.status;
        setStatusCode(code);
      }
    };

    fetchSchedule(props.movieName);
  }, [props.movieName]);

  switch (statusCode) {
    case 200:
      return (
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

    case 404:
      return <ResourceNotAvailable
        message={'Our databases have nothing to show at the moment sadly. :('}
      />;

    case 500:
      return <ServiceNotAvailable />;

    default:
      return <p>Loading.</p>;
  }
};

export default Schedule;
