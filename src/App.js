import React from 'react';

import Home from './components/Home';
import Schedule from './components/Schedule';
import GlobalAppBar from './components/GlobalAppBar';
import Information from './components/Information';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <GlobalAppBar />
      <AppRouter>
        <Home path={'/'} />
        <Schedule path={'schedule/:movieName'} />
        <Information path={'/info'} />
      </AppRouter>
    </div>
  );
};

export default App;
