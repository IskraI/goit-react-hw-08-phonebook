import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//writing token
export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

//remove token
const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const getProfileUser = createAsyncThunk(
  'auth/profile',

  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users/current');
      // After successful login, add the token to the HTTP header
      // console.log('profile', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *  * После успешной регистрации добавляем токен в HTTP-заголовок
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      // console.log('res', res.data);

      setToken(res.data.token);
      // thunkAPI.dispatch(getProfileUser());
      // console.log(
      //   ' instance.defaults.headers.common',
      //   instance.defaults.headers.common['Authorization']
      // );
      // console.log('res', res);
      return res.data;
    } catch (error) {
      // console.log('error', error);
      // console.log('thunkAPI', error.response.data.message);
      // const ggg = thunkAPI.rejectWithValue(error.response.data.message);
      // console.log('ggg', ggg);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
/*
 * POST @ /users/login
 * body: { email, password }
 *  * После успешного логина добавляем токен в HTTP-заголовок
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *  * После успешного логаута, удаляем токен из HTTP-заголовка
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // console.log('persistedToken', persistedToken);

    if (persistedToken === null || persistedToken === '') {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
