import { Container, Box, Highlight } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <Container maxW="1050px" centerContent padding="40px">
      <Box padding="4" color="black" maxW="container.ml">
        <Highlight
          query={['Remember Contact']}
          styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
          Welcome to our website Remember Contact! Here, you can keep track of
          the phone numbers of your loved ones and closest friends, ensuring
          that you always have their contact information at your fingertips. We
          understand the importance of staying connected with the people who
          matter most in our lives. In today's fast-paced world, it's easy to
          get caught up in our daily routines and forget to take a moment to
          reach out to those who we care about.
        </Highlight>
      </Box>
      <Link to="login">Log In</Link>
      <Link to="registration">Registration as new user</Link>
    </Container>
  );
};
