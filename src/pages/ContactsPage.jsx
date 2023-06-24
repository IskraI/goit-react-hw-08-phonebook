import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './ContactPage.module.css';

// import { toast } from 'react-toastify';

import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contact-selector';
import { fetchContacts } from 'redux/contact-operation';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleSecondary}>Contacts</h2>

      {contacts.length !== 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {error && contacts.length === 0 && <p>{error}</p>}
      {!isLoading && !error && contacts.length === 0 && (
        <p>
          There is no contacts yet. Use the form above to add your first
          contact.
        </p>
      )}
      {isLoading && (
        <>
          <br />
          <b>Waiting...</b>
        </>
      )}
    </div>
  );
}
