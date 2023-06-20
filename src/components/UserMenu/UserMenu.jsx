// import React from 'react';

// const UserMenu = () => {
//   <div>
//     <p>user</p>
//     <button>Login</button>
//     <button>Logout</button>
//   </div>;
// };

import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

export const UserMenu = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
