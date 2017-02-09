import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import ReduxSweetAlert from '../ReduxSweetAlert';
import reducer from '../reducer';
import immutableReducer from '../reducer-immutable';


it('should be ok when render component with store', () => {
  const rootReducer = combineReducers({
    sweetalert: reducer,
  });
  const store = createStore(rootReducer);
  const component = shallow(
    <Provider store={store}>
      <ReduxSweetAlert />
    </Provider>
  );

  expect(component.find(ReduxSweetAlert)).toHaveLength(1);
});

it('should be ok when render component with immutable store', () => {
  const rootReducer = combineReducers({
    sweetalert: immutableReducer,
  });
  const store = createStore(rootReducer);
  const component = shallow(
    <Provider store={store}>
      <ReduxSweetAlert />
    </Provider>
  );

  expect(component.find(ReduxSweetAlert)).toHaveLength(1);
});
