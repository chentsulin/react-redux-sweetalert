import createReducer from '../createReducer';


const INIT_ACTION = { type: '@@test/INIT_ACTION' };


it('should return initial state (number) when be called first time', () => {
  const initialState = 1;
  const reducer = createReducer(initialState, { a: () => {} });
  expect(reducer(undefined, INIT_ACTION)).toEqual(initialState);
});

it('should return initial state (object) when be called first time', () => {
  const initialState = {
    key: 1,
  };
  const reducer = createReducer(initialState, { a: () => {} });
  expect(reducer(undefined, INIT_ACTION)).toEqual(initialState);
});

it('should return initial state (array) when be called first time', () => {
  const initialState = [1, 2, 3, 4];
  const reducer = createReducer(initialState, { a: () => {} });
  expect(reducer(undefined, INIT_ACTION)).toEqual(initialState);
});
