import React from 'react';
import { createStore, combineReducers } from 'redux';
import { combineReducers as combineReducersImmutable } from 'redux-immutable';
import SweetAlert from 'sweetalert-react';
import { mount } from 'enzyme';

import ReduxSweetAlert from '../ReduxSweetAlert';
import reducer from '../reducer';
import immutableReducer from '../reducer-immutable';


it('should be ok when render component with store', () => {
  const rootReducer = combineReducers({
    sweetalert: reducer,
  });
  const store = createStore(rootReducer);
  const context = {
    store,
  };
  const wrapper = mount(
    <ReduxSweetAlert />,
    { context },
  );

  const component = wrapper.find(SweetAlert);

  expect(component).toHaveLength(1);
  expect(component.prop('show')).toBe(false);
  expect(component.prop('title')).toBe('');
});

it('should be ok when render component with immutable store', () => {
  const rootReducer = combineReducersImmutable({
    sweetalert: immutableReducer,
  });
  const store = createStore(rootReducer);
  const context = {
    store,
  };
  const wrapper = mount(
    <ReduxSweetAlert />,
    { context },
  );

  const component = wrapper.find(SweetAlert);

  expect(component).toHaveLength(1);
  expect(component.prop('show')).toBe(false);
  expect(component.prop('title')).toBe('');
});
