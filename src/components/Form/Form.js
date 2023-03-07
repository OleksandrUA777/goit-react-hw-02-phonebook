import { Component } from 'react';
import propTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  inputChangeHandler = event => {
    const name = event.currentTarget.name;
    const text = event.currentTarget.value;

    this.setState({
      [name]: text,
    });
  };

  formSubmitHandler = event => {
    event.preventDefault();

    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.resetForm();
  };
  render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChangeHandler}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}
Form.propTypes = {
  addContact: propTypes.func.isRequired,
};
