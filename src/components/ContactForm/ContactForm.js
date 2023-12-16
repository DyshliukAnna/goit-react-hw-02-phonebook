// import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div className={css.phonebookForm}>
        <form onSubmit={this.handleSubmitForm}>
          <label className={css.phonebookFormItem}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit"> Add Contact </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
