import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com/',
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };
//writing token
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//remove token
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// export const signUp = async (body) => return await
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
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
