import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import { add as addAction } from '../../reduxBundle';

const Add = ({ add }) => (<AddForm onSubmit={add} />);

Add.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    add: value => dispatch(addAction(value)),
  }),
)(Add);
