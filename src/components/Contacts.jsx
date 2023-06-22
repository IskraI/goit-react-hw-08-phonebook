import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operation';

import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/selector';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('first');
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title__contacts}>Contacts</h2>
      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}

      {isLoading && !error && (
        <>
          <br />
          <b>Waiting...</b>
        </>
      )}

      {error && <p>{error}</p>}

      {!isLoading && !error && contacts.length === 0 && (
        <p>There is no contacts yet.</p>
      )}
    </div>
  );
};
// export default Contacts;
