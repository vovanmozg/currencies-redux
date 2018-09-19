import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { remove as removeAction } from '../../reduxBundle';


class Remove extends React.PureComponent {
  removeHandler() {
    const { removeCurrency, name } = this.props;
    removeCurrency({ name });
  }

  render() {
    return (<input type="button" onClick={this.removeHandler.bind(this)} />);
  }
}

Remove.propTypes = {
  removeCurrency: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(
  null,
  dispatch => ({
    removeCurrency: value => dispatch(removeAction(value)),
  }),
)(Remove);
