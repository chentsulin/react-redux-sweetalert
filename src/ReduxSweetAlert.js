import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';

const mapStateToProps = state => ({
  sweetalert: state.sweetalert,
});

class ReduxSweetAlert extends Component {
  static propTypes = {
    sweetalert: PropTypes.object.isRequired,
  };

  render() {
    return <SweetAlert {...this.props.sweetalert} />;
  }
}

export default connect(mapStateToProps)(ReduxSweetAlert);
