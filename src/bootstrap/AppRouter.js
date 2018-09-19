import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => 'bbb'} />
    </Switch>
  </Router>
);

export default AppRouter;