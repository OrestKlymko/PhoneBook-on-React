import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/Auth/operations';

export const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePassChange = e => setPassword(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const onSubmitForm = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const name = e.currentTarget.elements.name.value;
    if (password === '' || email === '' || name === '') {
      setIsError(true);
      return;
    }
    dispatch(createUser({email,password,name}))
    setIsError(false);
  };

  return (
    <Container maxW="1050px" centerContent>
      <Box padding="10" color="black" w="600px">
        <form onSubmit={onSubmitForm}>
          <FormControl isInvalid={isError}>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="name"
              value={name}
              onChange={handleNameChange}
            />
            {isError && <FormErrorMessage>Name is required.</FormErrorMessage>}
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handlePassChange}
            />
            {isError && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
            <Button colorScheme="teal" variant="solid" type="submit" style={{marginTop:'10px'}}>
              Create account
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};
