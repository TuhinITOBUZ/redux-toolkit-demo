import pkg from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";
const { createSlice } = pkg;

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
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
    builder.addCase(cakeActions.ordered, (state)=>{
        state.numOfIcecreams--
    })
  }

});

export const icecreamReducer = icecreamSlice.reducer;
export const icecreamAction = icecreamSlice.actions;
