import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth-selector';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// export default Navigation;
