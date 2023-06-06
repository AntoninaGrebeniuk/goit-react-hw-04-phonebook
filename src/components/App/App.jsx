import { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Form } from '../Form/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Wrapper, Phonebook, Contacts } from './App.styled';

const CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount = () => {
    const contacts = localStorage.getItem(CONTACTS_KEY);
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  };

  createContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`, {
        position: 'center-top',
        fontSize: '15px',
      });

      return;
    }

    this.setState(prevState => ({
      contacts: [
        {
          ...data,
          id: nanoid(),
        },
        ...prevState.contacts,
      ],
    }));
  };

  onFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getContactByName = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filterContacts;
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getContactByName();

    return (
      <Container style={{}}>
        <Phonebook>Phonebook</Phonebook>
        <Form createContact={this.createContact} />

        <Contacts>Contacts</Contacts>
        <Wrapper>
          <Filter value={filter} onFilter={this.onFilter} />
          <ContactList
            contacts={filterContact}
            onRemoveContact={this.removeContact}
          />
        </Wrapper>
      </Container>
    );
  }
}
