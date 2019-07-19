import React from 'react';
import { Router } from "@reach/router"

// dummy home and schedule components
const Home = () => <div>Home</div>;
const Schedule = () => <div>Schedule</div>;

const AppRouter = () => {
  return (
    <Router>
      <Home path={ "/" } />
      <Schedule path={ "/schedule" } />
    </Router>
  )
};

export default AppRouter;