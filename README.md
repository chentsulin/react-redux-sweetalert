# react-redux-sweetalert

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> SweetAlert with Redux-style actions, reducers API


## Install

```
$ npm install react-redux-sweetalert
```


## Usage

```js
const rootReducer = combineReducers({
  sweetalert: reducer,
});

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <ReduxSweetAlert />
  </Provider>
);
```

Checkout full examples [here](./examples).


## API

### actions

#### showAlert

#### replaceAlert

#### dismissAlert


## License

MIT © [C.T. Lin](https://github.com/chentsulin/react-redux-sweetalert)

[npm-image]: https://badge.fury.io/js/react-redux-sweetalert.svg
[npm-url]: https://npmjs.org/package/react-redux-sweetalert
[travis-image]: https://travis-ci.org/chentsulin/react-redux-sweetalert.svg
[travis-url]: https://travis-ci.org/chentsulin/react-redux-sweetalert
[coveralls-image]: https://coveralls.io/repos/chentsulin/react-redux-sweetalert/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/react-redux-sweetalert?branch=master
[david_img]: https://david-dm.org/chentsulin/react-redux-sweetalert.svg
[david_site]: https://david-dm.org/chentsulin/react-redux-sweetalert

