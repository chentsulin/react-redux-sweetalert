import ReduxSweetAlert, {
  SHOW,
  REPLACE,
  DISMISS,
  showAlert,
  replaceAlert,
  dismissAlert,
  reducer,
  immutableReducer,
} from '../';


it('should export correctly', () => {
  expect(ReduxSweetAlert).toBeDefined();
  expect(SHOW).toBeDefined();
  expect(REPLACE).toBeDefined();
  expect(DISMISS).toBeDefined();
  expect(showAlert).toBeDefined();
  expect(replaceAlert).toBeDefined();
  expect(dismissAlert).toBeDefined();
  expect(reducer).toBeDefined();
  expect(immutableReducer).toBeDefined();
});
