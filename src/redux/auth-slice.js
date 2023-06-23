import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleLogOutFulfilled = state => {
  state.isLoading = false;
  state.user = { name: null, email: null };
  state.token = '';
  state.isLoggedIn = false;
};

const handleLogInFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addMatcher(
        ({ type }) => type.endsWith('/pending') && type.includes('auth'),
        handlePending
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected') && type.includes('auth'),
        handleRejected
      );

    // [register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [authOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  },
});

export const authReducer = authSlice.reducer;
