import PropTypes from 'prop-types';
import React from 'react';
import Remove from '../Remove';
import style from './style.less';

const Currency = ({ name, rate }) => (
  <div className={style.item}>
    <span className={style.name}>{name}</span>
    <span className={style.rate}>${Math.round(1 / rate * 100) / 100}</span>
    <span className={style.button}><Remove name={name} /></span>
  </div>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number,
};

Currency.defaultProps = {
  rate: 0,
};

export default Currency;
