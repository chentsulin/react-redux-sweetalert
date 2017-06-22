import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';

const mapStateToProps = state => ({
  sweetalert: typeof state.toJS === 'function' ? state.toJS().sweetalert : state.sweetalert,
});

class ReduxSweetAlert extends Component {
  static propTypes = {
    sweetalert: PropTypes.shape({
      show: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return <SweetAlert {...this.props.sweetalert} />;
  }
}

export default connect(mapStateToProps)(ReduxSweetAlert);
