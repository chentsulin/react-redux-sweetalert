import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import ReduxSweetAlert from '../ReduxSweetAlert';
import reducer from '../reducer';


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
