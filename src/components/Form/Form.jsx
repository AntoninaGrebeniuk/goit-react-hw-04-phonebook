import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactInput, SubmitBtn, Label } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = nanoid();
  telInput = nanoid();

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>Name</Label>

        <ContactInput
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          id={this.nameInput}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={this.telInput}>Number</Label>

        <ContactInput
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          id={this.telInput}
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ContactForm>
    );
  }
}

Form.propTypes = {
  createContact: PropTypes.func.isRequired,
};
