import ReduxSweetAlert, {
  sweetalert,
  swal,
  close,
  closeIfShow,
  reducer,
  immutableReducer,
  actions,
} from '../';


it('should export correctly', () => {
  expect(ReduxSweetAlert).toBeDefined();
  expect(sweetalert).toBeDefined();
  expect(swal).toBeDefined();
  expect(close).toBeDefined();
  expect(reducer).toBeDefined();
  expect(immutableReducer).toBeDefined();
  expect(actions).toEqual({
    sweetalert,
    swal,
    close,
    closeIfShow,
  });
});
