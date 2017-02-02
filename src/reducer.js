import createReducer from './utils/createReducer';
import {
  SHOW,
  REPLACE,
  DISMISS,
} from './actions';


const initialState = {
  show: false,
  title: '',
};


export default createReducer(initialState, {
  [SHOW]: (state, { payload }) => {
    console.log(state, payload);
    return {
      show: true,
      ...payload,
    };
  },

  [REPLACE]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),

  [DISMISS]: () => initialState,
});
