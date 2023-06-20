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
export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

// export default Navigation;
