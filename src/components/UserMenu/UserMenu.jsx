// import React from 'react';

// const UserMenu = () => {
//   <div>
//     <p>user</p>
//     <button>Login</button>
//     <button>Logout</button>
//   </div>;
// };

import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth-selector';
import { logOut } from '../../redux/auth-operation';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  // const navigate = Navigate();

  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email} </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>

    // <div className={css.wrapper}>
    //   <NavLink to="/register">Register</NavLink>
    //   <NavLink to="/login">Log In</NavLink>
    // </div>
  );
};
