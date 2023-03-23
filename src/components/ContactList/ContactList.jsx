import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import { selectContacts, selectContactsFilter } from 'redux/contacts/selectors';

import styles from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));

    toast.info(`This contact is delited from your phonebook!`);
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <ul className={styles.list}>
      {visibilityContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <span className={styles.name}>{contact.name}: </span>
          <a href={`tel:${contact.number}`} className={styles.number}>
            {contact.number}
          </a>
          <button
            className={styles.button}
            type="button"
            id={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
