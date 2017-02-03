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

  // custom option
  onConfirm?: Function,
  onCancel?: Function,
  onClose?: Function,
  onEscapeKey?: Function,
  onOutsideClick?: Function,
}
```

### actions

#### showAlert(payload: Payload)

#### replaceAlert(payload: Payload)

#### dismissAlert()

## Examples

```js
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert'; // eslint-disable-line


class Main extends Component {
  static propTypes = {
    dismissAlert: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.showAlert({
            title: 'Demo',
            text: 'SweetAlert in React',
            onConfirm: this.props.dismissAlert,
          })}
        >Alert</button>
        <ReduxSweetAlert />
      </div>
    );
  }
}


export default connect(null, {
  showAlert,
  dismissAlert,
})(Main);
```

Checkout full examples [here](./examples).

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

