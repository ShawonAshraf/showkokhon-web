import React from 'react';
import { Router } from "@reach/router"

const AppRouter = (props) => {
  return (
    <Router>
      { props.children }
    </Router>
  );
};

export default AppRouter;