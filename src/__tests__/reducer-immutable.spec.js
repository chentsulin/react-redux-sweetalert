import {
  SHOW,
  REPLACE,
  DISMISS,
} from '../actions';
import immutableReducer from '../reducer-immutable';


it('should handle SHOW action', () => {
  const prevState = {
    show: false,
    title: '',
  };
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

it('should handle REPLACE action', () => {
  const prevState = {
    show: true,
    title: 'show',
  };
  const replaceAction = {
    type: REPLACE,
    payload: {
      title: 'replace',
    },
  };
  expect(immutableReducer(prevState, replaceAction).toJS()).toEqual({
    show: true,
    title: 'replace',
  });
});

it('should handle DISMISS action', () => {
  const prevState = {
    show: true,
    title: 'replace',
  };
  const dismissAction = {
    type: DISMISS,
  };
  expect(immutableReducer(prevState, dismissAction).toJS()).toEqual({
    show: false,
    title: '',
  });
});

