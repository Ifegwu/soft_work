import React from 'react';
import Home from '../counter/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Route  exect path="/" component={Home}>
    </Route>
  </Router>
)

export default Routes;
