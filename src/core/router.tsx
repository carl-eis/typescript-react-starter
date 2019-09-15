import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Main routes */}
        <Route path="/" exact component={Home} />
        {/* Fallback route */}
        <Route path="/*" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
