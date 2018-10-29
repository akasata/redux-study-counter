import React, { Component } from 'react';
import './App.css';

import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
        <Counter value={0}/>
    );
  }
}

export default App;
