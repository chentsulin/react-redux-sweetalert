import ReduxSweetAlert from './ReduxSweetAlert';
import {
  sweetalert,
  replace,
  dismiss,
} from './actions';

export default ReduxSweetAlert;
export { default as reducer } from './reducer';
export { default as immutableReducer } from './reducer-immutable';

export {
  sweetalert,
  replace,
  dismiss,
};

export const swal = sweetalert;

export const actions = {
  sweetalert,
  swal,
  replace,
  dismiss,
};
