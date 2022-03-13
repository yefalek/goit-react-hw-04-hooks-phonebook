import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Form from "./components/ContactForm/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import "./App.css";

export default function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => { window.localStorage.setItem("contacts", JSON.stringify(contacts)); }, [contacts]);

  const AddContact = ({ name, number }) => {
    const contact = { id: shortid.generate(), name, number, };
    contacts.some((e) => e.name === name)?alert("Contact is already exist") : setContacts([contact, ...contacts]);
  }
  
  const FilterChange = e => { setFilter(e.currentTarget.value)};

  const getVisibleContacts = () => {
    return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()),);
  };

  const RemoveContact = (id) => { setContacts(contacts.filter((e) => e.id !== id)); };
  
    return (
      <>
        <h2>Form Contact</h2>
        <Form
          className={"forms"}
          onSubmit={AddContact}
        />
        <h2>Contacts list</h2>
        <Filter value={filter} onChange={FilterChange} />
        <ContactsList
          contacts={getVisibleContacts()}
          onRemove={RemoveContact}
        />
      </>
  );
}