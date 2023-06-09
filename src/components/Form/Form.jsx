import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactInput, SubmitBtn, Label } from './Form.styled';

export function Form({ createContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInput = nanoid();
  const telInput = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <Label htmlFor={nameInput}>Name</Label>

      <ContactInput
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        id={nameInput}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+((['-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor={telInput}>Number</Label>

      <ContactInput
        type="tel"
        name="number"
        value={number}
        onChange={handleInputChange}
        id={telInput}
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </ContactForm>
  );
}

Form.propTypes = {
  createContact: PropTypes.func.isRequired,
};
