/**
 * create a reducer with function map.
 *
 * @param  {any} initialState  initial state value.
 * @param  {Object} handlers   function handlers as map.
 * @return {any}               next state value.
 */
export default function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const reduceFn = handlers[action.type];
    return reduceFn ? reduceFn(state, action) : state;
  };
}
