import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReduxSweetAlert, { swal } from 'react-redux-sweetalert'; // eslint-disable-line


class Main extends Component {
  static propTypes = {
    swal: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.swal({
            title: 'Hi!',
            text: 'You can\'t close via ESC!',
            type: 'info',
            allowEscapeKey: false,
            onEscapeKey: () => console.log('esc!'),
          })}
        >Alert</button>
        <ReduxSweetAlert />
      </div>
    );
  }
}


export default connect(null, {
  swal,
})(Main);
