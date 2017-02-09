
import warning from 'warning';

import createReducer from './utils/createReducer';
import {
  SHOW,
  DISMISS,
} from './actions';

let reducer; // eslint-disable-line import/no-mutable-exports

try {
  const fromJS = require('immutable').fromJS; // eslint-disable-line global-require

  const initialState = fromJS({
    show: false,
    title: '',
  });

  reducer = createReducer(initialState, {
    [SHOW]: (state, { payload }) => fromJS({
      show: true,
      ...payload,
    }),

    [DISMISS]: () => initialState,
  });
} catch (error) {
  reducer = () => {
    warning(false, 'You must install immutable-js for the immutable reducer to work!');
  };
}

export default reducer;
