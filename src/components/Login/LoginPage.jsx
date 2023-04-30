import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Auth/operations';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userCreate.isLogin);
  const navigation = useNavigate();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePassChange = e => setPassword(e.target.value);

  const onSubmitForm = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    if (password === '' || email === '') {
      setIsError(true);
      return;
    }

    dispatch(loginUser({ email, password }));

    setIsError(false);
  };
  useEffect(() => {
    if (isLogin) {
      navigation('/contacts');
    }
    // eslint-disable-next-line
  }, [isLogin]);
  return (
    <Container maxW="1050px" centerContent>
      <Box padding="10" color="black" w="600px">
        <form onSubmit={onSubmitForm}>
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
            <FormLabel style={{ marginTop: '20px' }}>Password</FormLabel>
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
              marginTop="20px"
            >
              Log in
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};
