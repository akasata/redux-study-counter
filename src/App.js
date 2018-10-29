import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './App.css';
import counterReducer from './reducers'

import Counter from './components/Counter'

const store = createStore(counterReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Counter value={0}/>
        </Provider>
    );
  }
}

export default App;
