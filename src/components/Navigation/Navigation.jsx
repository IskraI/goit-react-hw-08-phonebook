import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { Head, Link } from './Header.styled';
// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  return (
    // <nav>
    //   <NavLink to="/">Home</NavLink>
    // </nav>

    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

// export default Navigation;
