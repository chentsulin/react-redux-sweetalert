import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { immutableReducer } from 'react-redux-sweetalert'; // eslint-disable-line
import 'sweetalert/dist/sweetalert.css';

import Main from './Main';

const rootReducer = combineReducers({
  sweetalert: immutableReducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}


export default App;
