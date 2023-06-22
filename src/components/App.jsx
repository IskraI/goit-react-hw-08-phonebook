// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactList from 'components/ContactList/ContactList';
// import Navigation from 'components/Navigation/Navigation';
// import Filter from 'components/Filter/Filter';
// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../redux/operation';

// import {
//   selectContacts,
//   selectIsLoading,
//   selectError,
// } from '../redux/selector';

// const App = () => {
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <Navigation />

//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={css.title__contacts}>Contacts</h2>
//       {contacts.length !== 0 && (
//         <>
//           <Filter />
//           <ContactList />
//         </>
//       )}

//       {isLoading && !error && (
//         <>
//           <br />
//           <b>Waiting...</b>
//         </>
//       )}

//       {error && <p>{error}</p>}

//       {!isLoading && !error && contacts.length === 0 && (
//         <p>There is no contacts yet.</p>
//       )}
//     </div>
//   );
// };
// export default App;
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
