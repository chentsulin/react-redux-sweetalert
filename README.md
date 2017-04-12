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
import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from 'react-redux-sweetalert';

const rootReducer = combineReducers({
  sweetalert: reducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <ReduxSweetAlert />
  </Provider>
);
```

You should import sweetalert.css from cdn, file, node_modules(sweetalert/dist/sweetalert.css) or wherever can find the css code.

Checkout full examples [here](https://github.com/chentsulin/react-redux-sweetalert/tree/master/examples).

## API

### types

#### Payload

```js
{
  // sweetalert option
  title: string,
  text?: string,
  type?: string,
  customClass?: string,
  showCancelButton?: boolean,
  showConfirmButton?: boolean,
  confirmButtonText?: string,
  confirmButtonColor?: string,
  cancelButtonText?: string,
  imageUrl?: string,
  imageSize?: string,
  html?: boolean,
  animation?: boolean|string,
  inputType?: string,
  inputValue?: string,
  inputPlaceholder?: string,
  showLoaderOnConfirm?: boolean,
	
  timer?: number,
  closeOnConfirm?: boolean,
  closeOnCancel?: boolean,
  allowEscapeKey?: boolean,
  allowOutsideClick?: boolean,

  // custom option
  onConfirm?: Function,
  onCancel?: Function,
  onClose?: Function,
  onEscapeKey?: Function,
  onOutsideClick?: Function,
}
```

### actions

#### swal(title: string, text: ?string, type: ?string)
#### swal(payload: Payload)

#### close()

## Examples

```js
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReduxSweetAlert, { swal, close } from 'react-redux-sweetalert'; // eslint-disable-line


class Main extends Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    swal: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.swal({
            title: 'Demo',
            text: 'SweetAlert in React',
            onConfirm: this.props.close,
          })}
        >Alert</button>
        <ReduxSweetAlert />
      </div>
    );
  }
}


export default connect(null, {
  swal,
  close,
})(Main);
```

Checkout full examples [here](./examples).

## Use with ImmutableJS

```js
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { immutableReducer } from 'react-redux-sweetalert';

const rootReducer = combineReducers({
  sweetalert: immutableReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <ReduxSweetAlert />
  </Provider>
);
```

See full example [here](https://github.com/chentsulin/react-redux-sweetalert/tree/master/examples/immutable/components/App.js).

## License

MIT © [C.T. Lin](https://github.com/chentsulin/react-redux-sweetalert)

[npm-image]: https://badge.fury.io/js/react-redux-sweetalert.svg
[npm-url]: https://npmjs.org/package/react-redux-sweetalert
[travis-image]: https://travis-ci.org/chentsulin/react-redux-sweetalert.svg?branch=master
[travis-url]: https://travis-ci.org/chentsulin/react-redux-sweetalert
[coveralls-image]: https://coveralls.io/repos/chentsulin/react-redux-sweetalert/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/react-redux-sweetalert?branch=master
[david_img]: https://david-dm.org/chentsulin/react-redux-sweetalert.svg
[david_site]: https://david-dm.org/chentsulin/react-redux-sweetalert

