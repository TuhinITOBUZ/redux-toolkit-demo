// import pkg from '@reduxjs/toolkit';
// const { configureStore } = pkg
// import { cakeReducer } from "../features/cake/cakeSlice.js";
// import { icecreamReducer } from '../features/icecream/icecreamSlice.js';
// import { userReducer } from '../features/user/userSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user/userSlice';
import { cakeReducer } from '../features/cake/cakeSlice';
import { icecreamReducer } from '../features/icecream/icecreamSlice';

export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
});
