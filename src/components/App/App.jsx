import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialContacts } from '../../data/initialContacts';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Wrapper, Phonebook, Contacts } from './App.styled';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(
    CONTACTS_KEY,
    initialContacts
  );

  const [filter, setFilter] = useState('');

  const createContact = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`, {
        position: 'center-top',
        fontSize: '15px',
      });

      return;
    }

    const newContact = { ...data, id: nanoid() };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const onFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getContactByName = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filterContacts;
  };

  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <Form createContact={createContact} />

      <Contacts>Contacts</Contacts>
      <Wrapper>
        <Filter value={filter} onFilter={onFilter} />
        <ContactList
          contacts={getContactByName()}
          onRemoveContact={removeContact}
        />
      </Wrapper>
    </Container>
  );
};
