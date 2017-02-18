import warning from 'warning';
import compose from 'compose-function';

export const SHOW = '@sweetalert/SHOW';
export const CLOSE = '@sweetalert/CLOSE';


const ALLOWS_KEYS = [
  // sweetalert option
  'title',
  'text',
  'type',
  'customClass',
  'showCancelButton',
  'showConfirmButton',
  'confirmButtonText',
  'confirmButtonColor',
  'cancelButtonText',
  'imageUrl',
  'imageSize',
  'html',
  'animation',
  'inputType',
  'inputValue',
  'inputPlaceholder',
  'showLoaderOnConfirm',

  'closeOnConfirm',
  'closeOnCancel',
  'allowEscapeKey',
  'allowOutsideClick',
  'timer',

  // custom option
  'onConfirm',
  'onCancel',
  'onClose',
  'onEscapeKey',
  'onOutsideClick',
];


let _timeout;

export const close = () => {
  if (_timeout) {
    clearTimeout(_timeout);
    _timeout = null;
  }
  return ({
    type: CLOSE,
  });
};

export const closeIfShow = () => {
  if (_timeout) {
    clearTimeout(_timeout);
    _timeout = null;
  }
  return (dispatch, getState) => {
    if (getState().sweetalert.show) {
      dispatch({
        type: CLOSE,
      });
    }
  };
};


function getInvalidProps(payload) {
  return Object.keys(payload).filter(key => ALLOWS_KEYS.indexOf(key) === -1);
}

function warningInvalidProps(payload) {
  const invalidProps = getInvalidProps(payload);
  invalidProps.forEach(prop => {
    warning(false, `Property ${prop} is invalid. You can not pass it to SweetAlert`);
  });
}

function parseArgument(f1, f2, f3) {
  if (typeof f1 === 'string') {
    const payload = {
      title: f1,
    };
    if (f2) payload.text = f2;
    if (f3) payload.type = f3;
    return payload;
  }
  return f1;
}


function createCloseOnConfirmTransform(dispatch) {
  return ({ closeOnConfirm, ...payload }) => ({
    ...payload,
    onConfirm: (...args) => {
      if (typeof payload.onConfirm === 'function') payload.onConfirm(...args);
      if (closeOnConfirm !== false) {
        dispatch(close());
      }
    },
  });
}

function createCloseOnCancelTransform(dispatch) {
  return ({ closeOnCancel, ...payload }) => ({
    ...payload,
    onCancel: (...args) => {
      if (typeof payload.onCancel === 'function') payload.onCancel(...args);
      if (closeOnCancel !== false) {
        dispatch(close());
      }
    },
  });
}

function createAllowEscapeKeyTransform(dispatch) {
  return ({ allowEscapeKey, ...payload }) => ({
    ...payload,
    onEscapeKey: (...args) => {
      if (typeof payload.onEscapeKey === 'function') payload.onEscapeKey(...args);
      if (allowEscapeKey !== false) {
        dispatch(close());
      }
    },
  });
}

function createAllowOutsideClickTransform(dispatch) {
  return ({ allowOutsideClick, ...payload }) => ({
    ...payload,
    onOutsideClick: (...args) => {
      if (typeof payload.onOutsideClick === 'function') payload.onOutsideClick(...args);
      if (allowOutsideClick === true) {
        dispatch(close());
      }
    },
  });
}

function createTimerTransform(dispatch) {
  return ({ timer, ...payload }) => {
    if (timer && typeof timer === 'number') {
      _timeout = setTimeout(() => dispatch(close()), timer);
    }
    return payload;
  };
}


export const sweetalert = (...args) => {
  const payload = parseArgument(...args);
  warningInvalidProps(payload);
  return dispatch => {
    const closeOnConfirm = createCloseOnConfirmTransform(dispatch);
    const closeOnCancel = createCloseOnCancelTransform(dispatch);
    const allowEscapeKey = createAllowEscapeKeyTransform(dispatch);
    const allowOutsideClick = createAllowOutsideClickTransform(dispatch);
    const timer = createTimerTransform(dispatch);

    const transform = compose(
      closeOnConfirm,
      closeOnCancel,
      allowEscapeKey,
      allowOutsideClick,
      timer,
    );

    dispatch({
      type: SHOW,
      payload: transform(payload),
    });
  };
};

