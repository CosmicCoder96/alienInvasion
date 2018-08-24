import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Canvas from './components/Canvas';

class App extends Component {
  render() {
    return (
      <Canvas />
    );
  }
}

App.PropTypes={
  message: PropTypes.string.isRequired
}
export default App;
