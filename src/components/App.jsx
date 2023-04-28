import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { ContactList } from './ContactList';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from './Login/LoginPage';
import { RegistrationPage } from './Registration/RegistrationPage';
import {WelcomePage} from './WelcomePage/WelcomePage'

export function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<WelcomePage/>}/>
          <Route path="contacts" element={<ContactList />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
