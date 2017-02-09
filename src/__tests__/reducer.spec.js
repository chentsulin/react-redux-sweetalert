import {
  SHOW,
  CLOSE,
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

it('should handle CLOSE action', () => {
  const prevState = {
    show: true,
    title: 'replace',
  };
  const closeAction = {
    type: CLOSE,
  };
  expect(reducer(prevState, closeAction)).toEqual({
    show: false,
    title: '',
  });
});

