import {
  SHOW,
  REPLACE,
  DISMISS,
} from '../actions';
import reducer from '../reducer';


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
  expect(reducer(prevState, showAction)).toEqual({
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
  expect(reducer(prevState, replaceAction)).toEqual({
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
  expect(reducer(prevState, dismissAction)).toEqual({
    show: false,
    title: '',
  });
});

