import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   count: 0,
};

const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state) => {
         state.count++;
      },

      decrement: (state) => {
         state.count--;
      },

      incrementByAmount: (state, action) => {
         state.count += Number(action.payload);
      },

      decrementByAmount: (state, action) => {
         state.count -= action.payload * 1;
      },
   },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
   counterSlice.actions;

export default counterSlice.reducer;
