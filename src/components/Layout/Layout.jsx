import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

import { AppBar } from '../AppBar/AppBar';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsAuth, selectUser } from 'redux/auth-selector';
// import { getProfileUser, setToken } from 'redux/auth-operation';

const Layout = () => {
  // const token = useSelector(selectIsAuth);
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (token && !user) {
  //     setToken(token);

  //     dispatch(getProfileUser());
  //   }
  // }, [token, user, dispatch]);
  return (

      <div
        className={css.container}
        // style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}
      >
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>

  );
};
export default Layout;
