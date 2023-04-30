import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/Contact/filterSlice';
import { Input } from '@chakra-ui/react';

export function Filter() {
  const dispatch = useDispatch();

  const onInput = e => {
    dispatch(filterContacts(e.currentTarget.value.toLowerCase()));
  };

  const filterID = nanoid();
  return (
    <div style={{ margin: '20px auto' }}>
      <div>Find contacts by name</div>
      <Input
        id={filterID}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onInput}
      />
    </div>
  );
}
