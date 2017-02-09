/* eslint-disable global-require */
import { fromJS } from 'immutable';

import {
  SHOW,
  CLOSE,
} from '../actions';

beforeEach(() => {
  jest.resetModules();
});

it('should handle SHOW action', () => {
  const immutableReducer = require('../reducer-immutable').default;
  const prevState = fromJS({
    show: false,
    title: '',
  });
  const showAction = {
    type: SHOW,
    payload: {
      title: 'show',
    },
  };
  expect(immutableReducer(prevState, showAction).toJS()).toEqual({
    show: true,
    title: 'show',
  });
});

it('should handle CLOSE action', () => {
  const immutableReducer = require('../reducer-immutable').default;
  const prevState = fromJS({
    show: true,
    title: 'replace',
  });
  const closeAction = {
    type: CLOSE,
  };
  expect(immutableReducer(prevState, closeAction).toJS()).toEqual({
    show: false,
    title: '',
  });
});

it('should warning when immutable is not installed', () => {
  /* eslint-disable no-console */
  console.error = jest.fn();
  jest.mock('immutable', () => {
    throw new Error('Cannot find module \'immutable\'');
  });
  const immutableReducer = require('../reducer-immutable').default;
  immutableReducer();
  expect(console.error).toBeCalledWith(
    'Warning: You must install immutable-js for the immutable reducer to work!'
  );
  /* eslint-enable no-console */
});

