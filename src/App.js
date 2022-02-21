import React, { useState, useEffect } from "react";
import Form from "./components/ContactForm/Form";
import ContactsList from "./components/ContactsList/ContsctsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

export default function App() {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Users = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  
  const [contacts, setContacts] = useState(Users);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsLocal = localStorage.getItem("contactsLocal");
    const parsedContacts = JSON.parse(contactsLocal);

    setContacts(parsedContacts ?? Users);
  }, []);

  useEffect(() => { localStorage.setItem("contactsLocal", JSON.stringify(contacts)); }, [contacts]);
  
  const handleAddContact = (newContact) => {
    const filteredUsers = contacts.find((contact) => contact.name === newContact.name);
    filteredUsers ? alert("Contact is already exist") : setContacts([newContact, ...contacts]);
  };
  
  const handleRemoveContact = (contactId) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (e) => { setFilter(e.currentTarget.value); };

  const getVisibleContacts = () => {
    const lowFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(lowFilter));
  };
    return (
      <>
        <h2>Form Contact</h2>
        <Form
          className={"forms"}
          onSubmit={handleAddContact}
        />
        <h2>Contacts list</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactsList
          contacts={getVisibleContacts}
          onRemove={handleRemoveContact}
        />
      </>
  );
}