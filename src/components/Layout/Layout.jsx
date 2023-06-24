import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from '../Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/auth-selector';

const Layout = () => {
  // const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.container}>
      {/* <Loader /> */}
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
