import React from 'react';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from './redux/auth/selectors';
import NotificationContainer from '../src/components/NotificationContainer/NotificationContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';

import { PrivateRoute } from './components/PrivateRoutes';
import { RestrictedRoute } from './components/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';

import Home from './page/Home';
import Layout from '../src/components/Layout/Layout';
import './App.module.scss';

// import { ChakraProvider, Box } from '@chakra-ui/react';

document.title = 'Phonebook_Redux';

const RegisterPage = lazy(() => import('./page/Register'));
const LoginPage = lazy(() => import('./page/Login'));
const ContactsPage = lazy(() => import('./page/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    // <ChakraProvider>
    // <Box w="100%" h="100%" bgGradient="linear(to-l, #7928CA, #FF0080)">
    <Container>
      {isRefreshing ? (
        <NotificationContainer />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
    //   </Box>
    // </ChakraProvider>
  );
}

// #FF0080

// import { Triangle } from 'react-loader-spinner';

// {
//   /* <Triangle
//   height="80"
//   width="80"
//   color="blueviolet"
//   ariaLabel="triangle-loading"
//   wrapperStyle={{}}
//   wrapperClassName=""
//   visible={true}
// /> */
// }

// #7928CA, #FF0080);
