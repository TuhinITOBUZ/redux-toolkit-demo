import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { icecreamReducer } from '../features/icecream/icecreamSlice.js';
import { userReducer } from '../features/user/userSlice.js';

export  const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    }
})
