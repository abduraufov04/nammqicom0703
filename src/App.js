// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Group from './pages/Group/Group';
import Login from './pages/Auth/Login.js'
import Registration from './pages/Auth/Register.js'
import ProfilePage from './pages/profile/profile.js';
import Chat from './pages/chat/chat.js';
import Navbar from './components/navbar.js';
import UserProfile from './UserProfile.js';


const App = () => {
  return (
    <Router>
          {/* <LinearDeterminate /> */}
    <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/group" component={Group} />
        <Route path="/login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/chat" component={Chat} />
        <Route path="/:username" component={UserProfile} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;
