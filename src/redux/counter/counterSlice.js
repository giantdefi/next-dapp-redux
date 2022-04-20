import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  }
 
});

 export const { increment, decrement } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
