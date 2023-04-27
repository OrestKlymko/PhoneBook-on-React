import { Filter } from './filter/Filter';
import { Form } from './contacts/contacts';
import { ContactList } from './contactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterContacts } from '../redux/filterSlice';
import { deleteContact, fetchContacts, postContact } from './API/operations';

export function App() {
  const contacts = useSelector(state => state.newContact.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onInput = data => {
    dispatch(filterContacts(data.toLowerCase()));
  };

  const formSubmit = data => {
    if (Boolean(contacts.find(contact => contact.name === data.name))) {
      alert(`${data.name} is already in contacts`);
    } else {
      dispatch(postContact(data));
    }
  };

  const onDeleteContact = deleteItem => {
    dispatch(deleteContact(deleteItem));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form formSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={onInput} />
      <ContactList
        onClick={onDeleteContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
}
