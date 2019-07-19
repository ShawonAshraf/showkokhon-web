import React from 'react';
import { Router } from "@reach/router"

// import components
import Home from '../components/Home';
import Schedule from '../components/Schedule';

const AppRouter = () => {
  return (
    <Router>
      <Home path={ "/" } />
      <Schedule path={ "/schedule" } />
    </Router>
  )
};

export default AppRouter;