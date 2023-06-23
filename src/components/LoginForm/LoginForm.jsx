import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth-operation';
import css from './LoginForm.module.css';
import { toast } from 'react-toastify';
// import { selectIsLoading } from 'redux/auth-selector';

export const LoginForm = () => {
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(response => {
        toast.success(`Wellcome, ${response.user.name}!`);
        form.reset();
      })
      // .catch(err => console.log('err', err));
      .catch(() => toast.error('Error login- wrong email or password.'));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
