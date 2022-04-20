import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  userid: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true,
      state.userid = true
    },
    setLogout: (state) => {
      state.isLogin = false,
      state.userid = false
    }
  }

});

export const { setLogin, setLogout } = authSlice.actions;

export const selectCount = (state) => state.auth.value;

export default authSlice.reducer;
