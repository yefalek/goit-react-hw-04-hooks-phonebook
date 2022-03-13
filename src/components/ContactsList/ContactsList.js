import React from 'react';
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";


const ContactsList = ({ contacts, onRemove }) => (
  <ul className={s.list}>
     <ContactListItem contacts={contacts} onRemove={onRemove} />
  </ul>
  );
export default ContactsList;
