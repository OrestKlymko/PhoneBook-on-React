import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import css from '../css/form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { postContact } from 'redux/operations';
import { Input, Button, Heading, Highlight, useToast } from '@chakra-ui/react';

export function Form() {
  const [state, setState] = useState({ name: '', number: '' });
  const contacts = useSelector(state => state.newContact.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const onInputChange = e => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    const data = { ...state, id: nanoid() };
    if (Boolean(contacts.find(contact => contact.name === data.name))) {
      toast({
        title: 'Oops...something wrong',
        description: `${data.name} is already in contacts`,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(postContact(data));
      toast({
        title: 'Contact created.',
        description: "We've created your contact for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setState({
        name: '',
        number: '',
      });
    }
  };

  const nameID = nanoid();
  const telID = nanoid();

  return (
    <form onSubmit={formSubmit}>
      <Heading lineHeight="tall">
        <Highlight
          query={['name', 'number']}
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
          Add name and number
        </Highlight>
      </Heading>
      <label id={nameID} className={css.label}>
        Name
        <Input
          size="md"
          id={nameID}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={onInputChange}
        />
      </label>
      <label id={telID} className={css.label}>
        Number
        <Input
          size="md"
          id={telID}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
          value={state.number}
        />
      </label>
      <Button
        type="submit"
        colorScheme="teal"
        variant="solid"
        style={{ margin: '10px auto' }}
      >
        Add contact
      </Button>
    </form>
  );
}
