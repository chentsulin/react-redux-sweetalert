import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReduxSweetAlert, { showAlert, dismissAlert } from 'react-redux-sweetalert';


class Main extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.showAlert({
            title: 'Demo',
            text: 'SweetAlert in React',
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
