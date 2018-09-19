import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class AddForm extends React.PureComponent {
  submitAddCurrencyForm(data) {
    const { addCurrency, reset } = this.props;
    addCurrency(data);
    return reset();
    // do other success stuff
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submitAddCurrencyForm.bind(this))}>
        <Field name="name" component="input" type="text" />
        <button type="submit">+</button>
      </form>
    );
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addCurrency',
})(AddForm);
