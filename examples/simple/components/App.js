import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from 'react-redux-sweetalert';
import 'sweetalert/dist/sweetalert.css';

import Main from './Main';

const rootReducer = combineReducers({
  sweetalert: reducer,
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
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
