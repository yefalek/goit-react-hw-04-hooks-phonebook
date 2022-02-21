import React, { useState } from "react";
import shortid from "shortid";
import s from "./Form.module.css";

export default function Form({onSubmit}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputid = shortid.generate();

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: shortid.generate(), name, number });
    reset();
  };

  const  reset = () => {
    setName("");
    setNumber("");
  };

  return(
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          placeholder="Your name is..."
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={numberInputid}>Phone</label>
        <input
          placeholder="+..."
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={nameInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
