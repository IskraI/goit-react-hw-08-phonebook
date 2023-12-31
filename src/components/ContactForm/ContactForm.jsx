import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contact-operation';
import { selectContacts, selectIsLoading } from '../../redux/contact-selector';
import { CenteredLoader } from 'components/Loader/Loader';
const ContactForm = () => {
  //store

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  //local state onchange form
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isLoading = useSelector(selectIsLoading);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const dataForm = { name, number };

    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`Contact with name "${name}" is already in contacts`);
    }

    const existNumber = contacts.find(el => el.number === number);
    if (existNumber) {
      return alert(
        `Contact with number ${existNumber.number} is already in  ${existNumber.name}`
      );
    }

    dispatch(addContact(dataForm));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <span className={css.input__name}>Name</span>
        <input
          className={css.input__data}
          type="text"
          name="name"
          // pattern="^[a-zA-Z0-9_.\-]+[\\\|\s]?[a-zA-Z0-9_.\-]+$"
          pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        <span className={css.input__name}> Phone</span>
        <input
          className={css.input__data}
          type="tel"
          name="number"
          // pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={css.add__button} type="submit">
        {isLoading ? <CenteredLoader /> : `Add contact`}
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ContactForm;
