import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
);

export default AppRouter;
