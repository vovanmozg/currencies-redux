import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import { add as addAction } from '../../reduxBundle';

const Add = ({ addCurrency }) => (<AddForm addCurrency={addCurrency} />);

Add.propTypes = {
  addCurrency: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    addCurrency: value => dispatch(addAction(value)),
  }),
)(Add);
