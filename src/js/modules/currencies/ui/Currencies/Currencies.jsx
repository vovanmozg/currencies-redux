import React from 'react';
import { connect } from 'react-redux';
import Currency from '../Currency';


const Currencies = ({ currencies }) => (
  <div>
    {currencies.map(currency => <Currency {...currency} />)}
  </div>
);

const ConnectedCurrencies = connect(
  state => ({
    currencies: state.currencies,
  }),
)(Currencies);

export default ConnectedCurrencies;
