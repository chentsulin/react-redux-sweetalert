import ReduxSweetAlert, {
  sweetalert,
  swal,
  replace,
  dismiss,
  reducer,
  immutableReducer,
  actions,
} from '../';


it('should export correctly', () => {
  expect(ReduxSweetAlert).toBeDefined();
  expect(sweetalert).toBeDefined();
  expect(swal).toBeDefined();
  expect(replace).toBeDefined();
  expect(dismiss).toBeDefined();
  expect(reducer).toBeDefined();
  expect(immutableReducer).toBeDefined();
  expect(actions).toEqual({
    sweetalert,
    swal,
    replace,
    dismiss,
  });
});
