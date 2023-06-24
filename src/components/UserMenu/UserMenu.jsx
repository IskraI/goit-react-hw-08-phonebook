import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth-selector';
import { logOut } from '../../redux/auth-operation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  let navigate = useNavigate();
  function handleClick() {
    dispatch(logOut());
    navigate('/');
  }
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email} </p>
      <button className={css.button} type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};
