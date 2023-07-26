import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const cakeReducer = cakeSlice.reducer
export const cakeActions = cakeSlice.actions
