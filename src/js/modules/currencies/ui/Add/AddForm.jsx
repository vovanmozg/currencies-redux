import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Autocomplete from './Autocomplete';
import style from './style.less';

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
      <form onSubmit={handleSubmit(this.submitAddCurrencyForm.bind(this))} className={style.form}>
        <Field
          name="name"
          component={Autocomplete}
          type="text"
          className={style.input}
          placeholder="Currency code..."
        />
        <button type="submit" className={style.button}>+</button>
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
