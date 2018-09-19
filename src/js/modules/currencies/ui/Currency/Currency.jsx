import PropTypes from 'prop-types';
import React from 'react';
import Remove from '../Remove';

// https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=C7AAAB7A-4F90-43EB-B4FD-692AA9E0561B
const Currency = ({ name }) => (
  <div>
    {name}

    <Remove name={name} />
  </div>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
