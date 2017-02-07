import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert-react';

import isPlainObject from './utils/is-plain-object';

const mapStateToProps = state => ({
  sweetalert: isPlainObject(state) ? state.sweetalert : state.toJS().sweetalert,
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
