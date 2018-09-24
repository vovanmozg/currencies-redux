import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Currency from '../Currency';
import style from './style.less';
import { currenciesSelector } from '../../selectors';

const Currencies = ({ currencies }) => (
  <div className={style.list}>
    {Object.entries(currencies).map(currency => (
      <Currency {...currency[1]} key={currency[1].name} />
    ))}
  </div>
);

Currencies.propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      rate: PropTypes.number,
    }),
  ).isRequired,
};

const ConnectedCurrencies = connect(
  state => ({
    currencies: currenciesSelector(state),
  }),
)(Currencies);

export default ConnectedCurrencies;
