import pkg from "@reduxjs/toolkit";
const { createSlice } = pkg
const {createAsyncThunk} = pkg
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action)=>{
        state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
        state.loading = false
        state.users = action.payload 
        state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action)=>{
        state.loading = false
        state.users = []
        state.error = action.error.message
    })
  }
});
export const userReducer = userSlice.reducer

