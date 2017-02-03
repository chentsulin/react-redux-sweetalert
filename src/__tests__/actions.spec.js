/* eslint-disable no-console */
import {
  SHOW,
  REPLACE,
  DISMISS,
  showAlert,
  replaceAlert,
  dismissAlert,
} from '../actions';


beforeEach(() => {
  console.error = jest.fn();
});

describe('showAlert', () => {
  it('should create SHOW action', () => {
    const payload = { title: 'show' };
    expect(showAlert(payload)).toEqual({
      type: SHOW,
      payload: { title: 'show' },
    });
    expect(console.error).not.toBeCalled();
  });

  it('should allow custom option in payload', () => {
    const payload = {
      title: 'show',
      onCancel: () => {},
    };
    showAlert(payload);
    expect(console.error).not.toBeCalled();
  });

  it('should warn for invalid props', () => {
    const payload = { titl: 'show' };
    showAlert(payload);
    expect(console.error).toBeCalledWith(
      'Warning: Property titl is invalid. You can not pass it to SweetAlert',
    );
  });
});

describe('replaceAlert', () => {
  it('should create REPLACE action', () => {
    const payload = { title: 'replace' };
    expect(replaceAlert(payload)).toEqual({
      type: REPLACE,
      payload: { title: 'replace' },
    });
  });

  it('should warn for invalid props', () => {
    const payload = { titl: 'replace' };
    replaceAlert(payload);
    expect(console.error).toBeCalledWith(
      'Warning: Property titl is invalid. You can not pass it to SweetAlert',
    );
  });
});


describe('dismissAlert', () => {
  it('should create DISMISS action', () => {
    expect(dismissAlert()).toEqual({
      type: DISMISS,
    });
  });
});
