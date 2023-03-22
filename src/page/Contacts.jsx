import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Container from '../components/Container/Container';
import ContactForm from '../components/Form/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import NotificationContainer from 'components/NotificationContainer/NotificationContainer';

import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../App.module.scss';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <NotificationContainer />}

      <h1 className={styles.title}>Your Phonebook </h1>

      <ContactForm />

      <h2 className={styles.title}>Contacts</h2>

      <Filter />

      <ContactList />

      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}
