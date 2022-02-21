import s from "./ContactList.module.css";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.item}>
      {name}:{number} <button onClick={() => onRemove(id)}> Remove </button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;
