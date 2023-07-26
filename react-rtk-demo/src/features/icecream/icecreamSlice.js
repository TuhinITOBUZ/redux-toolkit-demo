// import pkg from "@reduxjs/toolkit";
// import { cakeActions } from "../cake/cakeSlice.js";
// const { createSlice } = pkg;
import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ['cake/ordered']: (state) => {
  //         state.numOfIcecreams--
  //     }
  //   }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export const icecreamReducer = icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
