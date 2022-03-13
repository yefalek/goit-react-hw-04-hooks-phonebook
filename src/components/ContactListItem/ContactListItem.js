import React from 'react';
import s from "../ContactsList/ContactList.module.css";

const ContactListItem = ({ contacts, onRemove }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={s.item}>
            {name}:{number}
            <button onClick={() => onRemove(id)} type="button"> Remove </button>
      </li>
    );
  });

export default ContactListItem;