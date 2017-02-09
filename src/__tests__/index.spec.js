import ReduxSweetAlert, {
  showAlert,
  replaceAlert,
  dismissAlert,
  reducer,
  immutableReducer,
} from '../';


it('should export correctly', () => {
  expect(ReduxSweetAlert).toBeDefined();
  expect(showAlert).toBeDefined();
  expect(replaceAlert).toBeDefined();
  expect(dismissAlert).toBeDefined();
  expect(reducer).toBeDefined();
  expect(immutableReducer).toBeDefined();
});
