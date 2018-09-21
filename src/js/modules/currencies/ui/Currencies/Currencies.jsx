import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Currency from '../Currency';

const Currencies = ({ currencies }) => (
  <div>
    {Object.entries(currencies).map(currency => <Currency {...currency[1]} />)}
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
    currencies: state.currencies,
  }),
)(Currencies);

export default ConnectedCurrencies;
