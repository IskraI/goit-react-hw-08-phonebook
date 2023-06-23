import { useDispatch } from 'react-redux';
import { register } from 'redux/auth-operation';
// import css from './RegisterForm.module.css';
// import { useState } from 'react';
import { toast } from 'react-toastify';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const RegisterForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const handleChange = ({ target: { value, name } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(response => {
        toast.success(`Wellcome, ${response.user.name}!`);
        form.reset();
      })
      .catch(() => toast.error('Login error - wrong email or password.'));
  };
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '50vh' }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          // sm={4}
          // md={4}
          // sx={{
          //   backgroundImage:
          //     'url(https://source.unsplash.com/random?wallpapers)',
          //   backgroundRepeat: 'no-repeat',
          //   backgroundColor: t =>
          //     t.palette.mode === 'light'
          //       ? t.palette.grey[50]
          //       : t.palette.grey[900],
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#9a2f9d' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" value={name} onChange={handleChange} />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <button type="submit" disabled={!email || !password}>
    //     Register
    //   </button>
    // </form>
  );
};
