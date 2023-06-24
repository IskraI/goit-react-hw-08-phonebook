import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth-operation';
// import css from './LoginForm.module.css';
import { toast } from 'react-toastify';
// import { selectIsLoading } from 'redux/auth-selector';
//mui
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
import { styled } from '@mui/material/styles';
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
  const defaultTheme = createTheme();

  const ButtonCustom = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#9a2f9d',
    color: '#9a2f9d',
    borderRadius: '16px',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#9a2f9d',
      borderColor: '#9a2f9d',
      color: '#ffffff',
      boxShadow: '0 0 0 0.2rem rgba(205, 136, 208, 0.5)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#a57fa7',
      borderColor: '#a57fa7',
    },
    '&:focus': {
      boxShadow: 'none',
      // boxShadow: '0 0 0 0.2rem rgba(205, 136, 208, 0.5)',
    },
  }));

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        alignItems="top"
        justifyContent="center"
        sx={{ height: '100vh' }}
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
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{ height: '440px', borderRadius: '12px' }}
          component={Paper}
          elevation={6}
          square
        >
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
            <Typography component="h1" variant="h5" sx={{ color: '#9a2f9d' }}>
              Log in
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                color="secondary"
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
                color="secondary"
              />

              <ButtonCustom
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </ButtonCustom>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    //   <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
  );
};
