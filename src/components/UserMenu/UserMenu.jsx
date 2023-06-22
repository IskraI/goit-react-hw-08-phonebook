// import React from 'react';

// const UserMenu = () => {
//   <div>
//     <p>user</p>
//     <button>Login</button>
//     <button>Logout</button>
//   </div>;
// };

import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, </p>
      <button
        type="button"
        onClick={() => {
          console.log('first');
        }}
      >
        Logout
      </button>
    </div>

    // <div className={css.wrapper}>
    //   <NavLink to="/register">Register</NavLink>
    //   <NavLink to="/login">Log In</NavLink>
    // </div>
  );
};
