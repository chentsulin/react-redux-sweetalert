import ReduxSweetAlert from './ReduxSweetAlert';

export default ReduxSweetAlert;
export { default as reducer } from './reducer';
export {
  SHOW,
  REPLACE,
  DISMISS,
  showAlert,
  replaceAlert,
  dismissAlert,
} from './actions';

