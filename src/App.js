import React from 'react';

import Home from './components/Home';
import Schedule from './components/Schedule';
import GlobalAppBar from './components/GlobalAppBar';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <GlobalAppBar />
      <AppRouter>
        <Home path={'/'} />
        <Schedule path={'schedule/:movieName'} />
      </AppRouter>
    </div>
  );
};

export default App;
