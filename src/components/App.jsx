import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import Layout from 'components/Layout/Layout';
// import { useSelector } from 'react-redux';
// import { selectIsRefreshing } from '../redux/auth-selector';
import { refreshUser } from '../redux/auth-operation';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import css from './App.module.css';
// import { selectIsRefreshing } from 'redux/auth-selector';
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // console.log('isRefreshing', isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <main className={css.main}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            {/* <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            /> */}
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <ToastContainer
          position="top-center"
          reverseOrder={false}
          autoClose={2000}
        />
      </main>
    </>
  );
};
