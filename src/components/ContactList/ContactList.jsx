import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';

export function ContactList({ contacts, onRemoveContact }) {
  return (
    <ContactsList>
      <ContactItem contacts={contacts} onRemoveContact={onRemoveContact} />
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
