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

const isPendingAction = action =>
  action.type.endsWith('/pending') && action.type.includes('auth');

const isRejectedAction = action =>
  action.type.endsWith('/rejected') && action.type.includes('auth');

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
