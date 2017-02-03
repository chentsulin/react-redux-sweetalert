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
