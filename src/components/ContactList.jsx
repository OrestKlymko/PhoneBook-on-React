import css from '../css/contactlist.module.css';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { Form } from './Form';
import { Button, Container, Box, Heading } from '@chakra-ui/react';

export function ContactList() {
  const contacts = useSelector(state => state.newContact.items);
  const filter = useSelector(state => state.filter);
  const isLoad = useSelector(state => state.newContact.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="1050px" centerContent padding="40px">
      <Box padding="4" color="black" maxW="container.sm">
        <Form />
        <Heading as="h2" size="2xl" textAlign="center">
          Contacts
        </Heading>
        <Filter />
        {isLoad && <Loader />}
        <ul>
          {contacts
            .filter(item => item.name.toLowerCase().includes(filter))
            .map(contact => {
              return (
                <li key={contact.name} className={css.listContact}>
                  <b>{contact.name}</b> {contact.number}
                  <Button
                    colorScheme="red"
                    onClick={() => dispatch(deleteContact(contact.id))}
                  >
                    Delete
                  </Button>
                </li>
              );
            })}
        </ul>
      </Box>
    </Container>
  );
}
