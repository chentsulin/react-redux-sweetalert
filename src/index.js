import ReduxSweetAlert from './ReduxSweetAlert';
import {
  sweetalert,
  close,
  closeIfShow,
} from './actions';

export default ReduxSweetAlert;
export { default as reducer } from './reducer';
export { default as immutableReducer } from './reducer-immutable';

export {
  sweetalert,
  close,
  closeIfShow,
};

export const swal = sweetalert;

export const actions = {
  sweetalert,
  swal,
  close,
  closeIfShow,
};
