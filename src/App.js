// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/HomePage.js';
import Group from './pages/Group/Group.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/group" component={Group} />
      </Switch>
    </Router>
  );
};

export default App;
