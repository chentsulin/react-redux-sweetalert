import warning from 'warning';

export const SHOW = '@sweetalert/SHOW';
export const REPLACE = '@sweetalert/REPLACE';
export const DISMISS = '@sweetalert/DISMISS';


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

  // custom option
  'onConfirm',
  'onCancel',
  'onClose',
  'onEscapeKey',
  'onOutsideClick',
];

function getInvalidProps(payload) {
  return Object.keys(payload).filter(key => ALLOWS_KEYS.indexOf(key) === -1);
}

function warningInvalidProps(payload) {
  const invalidProps = getInvalidProps(payload);
  invalidProps.forEach(prop => {
    warning(false, `Property ${prop} is invalid. You can not pass it to SweetAlert`);
  });
}

export const sweetalert = payload => {
  warningInvalidProps(payload);
  return {
    type: SHOW,
    payload,
  };
};
export const replace = payload => {
  warningInvalidProps(payload);
  return {
    type: REPLACE,
    payload,
  };
};
export const dismiss = () => ({
  type: DISMISS,
});
