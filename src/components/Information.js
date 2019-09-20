import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InformationPanel from './InformationPanel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 30,
  },
}));

const infoData = [
  {
    question: 'Does this website track me around the internet?',
    answer: 'As far as my knowledge goes, I did not use any library that may have added a tracker. You are safe.',
  },
  {
    question: 'It says there is nothing on the database at the moment.',
    answer: 'The thing is, the backend service for this app relies on scraping data'
      + ' from Star cineplex and Blockbuster Cinemas websites.'
      + ' So, if for some reason, their poorly managed websites are'
      + ' down, the service will not be able to serve you anything.'
  },
  {
    question: 'Service down?',
    answer: 'If you see this message, consider that this service is doomed'
      + ' because hosting services are not free. It costs a good sum of money and I do not have that. Sed lief.'
  },
  {
    question: 'I clicked on a movie name, checked the schedule, how do I get back now?',
    answer: 'Simple. Click on the home icon on top.'
  },
  {
    question: 'How do I go back from this page?',
    answer: 'Simple. Click on the home icon on top.'
  },
  {
    question: 'Can I contribute to the development of this service?',
    answer: 'Well of course you can! Click on the Github icon on top to get started.'
  },
  {
    question: 'Is the project open source?',
    answer: 'Yes. Click on the Github icon on top to know more.'
  }
];

const Information = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        infoData.map((data, index) => {
          const propsToPass = {
            data,
            index,
          };

          return <InformationPanel key={index} info={propsToPass} />
        })
      }
    </div>
  );
};

export default Information;
