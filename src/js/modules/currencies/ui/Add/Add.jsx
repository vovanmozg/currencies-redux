import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { add as addAction } from '../../reduxBundle';
import Autocomplete from './Autocomplete';
import style from './style.less';

const Add = ({ addCurrency }) => (
  <div className={style['add-wrapper']}>
    <Autocomplete addCurrency={addCurrency} />
  </div>
);

Add.propTypes = {
  addCurrency: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    addCurrency: value => dispatch(addAction({ name: value })),
  }),
)(Add);
