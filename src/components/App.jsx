import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const listOfNames = this.state.contacts.map(({ name }) =>
      name.toUpperCase()
    );
    const nameToUpperCase = name.toLocaleUpperCase();
    // console.log(listOfNames);

    if (listOfNames.includes(nameToUpperCase)) {
      return alert(`${name} is already in contacs.`);
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  filterRender = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleUpperCase();
    return contacts.filter(contact =>
      contact.name.toLocaleUpperCase().includes(normalizedFilter)
    );
  };
  onDelete = event => {
    const id = event.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const stats = this.filterRender();
    // console.log('stats: ', stats);
    return (
      <>
        <h2>Phonebook</h2>
        <div>
          <Form addContact={this.addContact} />
        </div>
        <Filter value={this.state.filter} onChange={this.filterChange}></Filter>
        <ContactList dataContact={stats} onDelete={this.onDelete} />
      </>
    );
  }
}
