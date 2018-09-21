import PropTypes from 'prop-types';
import React from 'react';
import Remove from '../Remove';


const Currency = ({ name, rate }) => (
  <div>
    {name}
    {rate}

    <Remove name={name} />
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
