import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { ContactList } from './Contact/ContactList';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginPage } from './Login/LoginPage';
import { RegistrationPage } from './Registration/RegistrationPage';
import { WelcomePage } from './WelcomePage/WelcomePage';
import { useEffect } from 'react';
import { getCurrentUser } from '../redux/Auth/operations';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.userCreate.isLogin);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<WelcomePage />} />
          <Route
            exact
            path="contacts"
            element={
              isLogin ? <ContactList /> : <Navigate to="/registration" />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
