import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Container,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/Auth/operations';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const isNew = useSelector(state => state.userCreate.newUser);
  const navigation = useNavigate();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePassChange = e => setPassword(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const onSubmitForm = async e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const name = e.currentTarget.elements.name.value;
    if (password === '' || email === '' || name === '') {
      setIsError(true);
      return;
    }
    await dispatch(createUser({ email, password, name }));
    setIsError(false);
  };
  useEffect(() => {
    if (isNew) {
      toast({
        title: 'You are created account',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      navigation('/contacts');
    }
    // eslint-disable-next-line
  }, [isNew]);

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
            <Button
              colorScheme="teal"
              variant="solid"
              type="submit"
              style={{ marginTop: '10px' }}
            >
              Create account
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};
