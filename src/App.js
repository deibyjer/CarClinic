import React from 'react';
import { Grommet } from 'grommet';

import Home from './pages/home/home.js';
import Register from './pages/register/register.js';

const theme = {
  global: {
    colors: {
      brand: '#3C95BC',
     },
    font: {
      family: 'Roboto',
    },
    Text: {
      elevation: 'large',
    }
  },
};


class App extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Home />
      </Grommet>
    );
  }
}

export default App;
