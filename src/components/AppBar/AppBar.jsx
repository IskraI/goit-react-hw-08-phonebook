import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  // selectIsRefreshing,
} from '../../redux/auth-selector';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* {!isLoggedIn && !isRefreshing && <AuthNav />} */}
      {/* <AuthNav />
      <UserMenu /> */}
    </header>
  );
};
