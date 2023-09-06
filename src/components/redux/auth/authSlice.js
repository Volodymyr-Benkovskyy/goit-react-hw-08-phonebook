import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    idToken: null,
    email: null,
    refreshToken: null,
    localId: null,
  },
});

export default authSlice.reducer;
