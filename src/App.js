import React from 'react';
import { Grommet } from 'grommet';

import Home from './pages/home/home.js'

const theme = {
  global: {
    colors: {
      brand: '#3C95BC',
     },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
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
