import React from 'react';

import Home from './components/Home';
import Schedule from './components/Schedule';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <AppRouter>
      <Home path={ '/' } />
      <Schedule path={ 'schedule/:movieName' } />
    </AppRouter>
  )
}

export default App;
