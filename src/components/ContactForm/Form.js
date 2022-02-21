import React, { Component } from "react";
import shortid from "shortid";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidForm = this.validateForm();
    if (!isValidForm) return;
    onAdd({ id: shortid.generate(), name, number });
    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert("Field is empty");
      return false;
    }
    return onCheckUnique(name);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          placeholder="Your name is..."
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id={this.nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <label htmlFor={this.nameInputId}>Phone</label>
        <input
          placeholder="+..."
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          id={this.nameInputId}
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
}
export default Form;
