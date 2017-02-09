import ReduxSweetAlert from './ReduxSweetAlert';

export default ReduxSweetAlert;
export { default as reducer } from './reducer';
export { default as immutableReducer } from './reducer-immutable';
export {
  showAlert,
  replaceAlert,
  dismissAlert,
} from './actions';

