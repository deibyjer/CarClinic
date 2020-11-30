import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home/home.js';
import Register from './pages/register/register.js';
import BusinessDashboard from './pages/businessdashboard/BusinessDashboard.js';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <BusinessDashboard />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default App;
