/* eslint-disable no-console */
import {
  SHOW,
  DISMISS,
  sweetalert,
  dismiss,
} from '../actions';


beforeEach(() => {
  console.error = jest.fn();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});


describe('sweetalert', () => {
  it('should create SHOW action without error', () => {
    const dispatch = jest.fn();
    const payload = { title: 'show' };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(SHOW);
    expect(action.payload.title).toBe('show');
    expect(console.error).not.toBeCalled();
  });

  it('should assign title directly', () => {
    const dispatch = jest.fn();
    sweetalert('Good job!')(dispatch);
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(SHOW);
    expect(action.payload.title).toBe('Good job!');
    expect(console.error).not.toBeCalled();
  });

  it('should assign title, text directly', () => {
    const dispatch = jest.fn();
    sweetalert(
      'Good job!',
      'You clicked the button!',
    )(dispatch);
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(SHOW);
    expect(action.payload.title).toBe('Good job!');
    expect(action.payload.text).toBe('You clicked the button!');
    expect(console.error).not.toBeCalled();
  });

  it('should assign title, text, type directly', () => {
    const dispatch = jest.fn();
    sweetalert(
      'Good job!',
      'You clicked the button!',
      'success',
    )(dispatch);
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toBe(SHOW);
    expect(action.payload.title).toBe('Good job!');
    expect(action.payload.text).toBe('You clicked the button!');
    expect(action.payload.type).toBe('success');
    expect(console.error).not.toBeCalled();
  });

  it('should allow custom option in payload', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      onCancel: () => {},
    };
    sweetalert(payload)(dispatch);
    expect(console.error).not.toBeCalled();
  });

  it('should close on confirm as default', () => {
    const dispatch = jest.fn();
    const payload = { title: 'show' };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onConfirm();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: DISMISS,
    });
  });

  it('should not dispatch dismiss when closeOnConfirm: false', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      closeOnConfirm: false,
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onConfirm();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should close on cancel as default', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      showCancelButton: true,
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onCancel();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: DISMISS,
    });
  });

  it('should not dispatch dismiss when closeOnCancel: false', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      showCancelButton: true,
      closeOnCancel: false,
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onCancel();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should allow escape key as default', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onEscapeKey();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: DISMISS,
    });
  });

  it('should not dispatch dismiss when allowEscapeKey: false', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      allowEscapeKey: false,
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onEscapeKey();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should not allow outside click as default', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onOutsideClick();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch dismiss when allowOutsideClick: true', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      allowOutsideClick: true,
    };
    sweetalert(payload)(dispatch);
    const action = dispatch.mock.calls[0][0];
    action.payload.onOutsideClick();
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: DISMISS,
    });
  });

  it('should dispatch dismiss when timer set', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
      timer: 1000,
    };
    sweetalert(payload)(dispatch);
    jest.runTimersToTime(1100);
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: DISMISS,
    });
  });

  it('should not dispatch dismiss when no timer option', () => {
    const dispatch = jest.fn();
    const payload = {
      title: 'show',
    };
    sweetalert(payload)(dispatch);
    jest.runAllTimers();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should warn for invalid props', () => {
    const dispatch = jest.fn();
    const payload = { titl: 'show' };
    sweetalert(payload)(dispatch);
    expect(console.error).toBeCalledWith(
      'Warning: Property titl is invalid. You can not pass it to SweetAlert',
    );
  });
});

describe('dismiss', () => {
  it('should create DISMISS action', () => {
    expect(dismiss()).toEqual({
      type: DISMISS,
    });
  });
});
