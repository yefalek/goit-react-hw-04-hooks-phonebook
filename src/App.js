import React, { Component } from "react";
import Form from "./components/ContactForm/Form";
import ContactsList from "./components/ContactsList/ContsctsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUniqueContact = (name) => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find((contact) => contact.name === name);

    isExistContact && alert("Contact is already exist");

    return !isExistContact;
  };

  handleRemoveContact = (id) =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));

  handleFilterChange = (filter) => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.includes(filter));
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsContacts = JSON.parse(contacts);
      if (parsContacts) {
      this.setState({contacts:parsContacts})
      }
  }

  componentDidUpdate(prevValue, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h2>Form Contact</h2>
        <Form
          className={"forms"}
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <h2>Contacts list</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </>
    );
  }
}

export default App;
