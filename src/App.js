import React from 'react';

import Home from './pages/home/home.js';
import Register from './pages/register/register.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Register />
      </div>
    );
  }
}

export default App;
