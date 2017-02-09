import ReduxSweetAlert from './ReduxSweetAlert';
import {
  sweetalert,
  close,
} from './actions';

export default ReduxSweetAlert;
export { default as reducer } from './reducer';
export { default as immutableReducer } from './reducer-immutable';

export {
  sweetalert,
  close,
};

export const swal = sweetalert;

export const actions = {
  sweetalert,
  swal,
  close,
};
