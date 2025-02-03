import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "./type"

const asyncFetchUserInfo = createAsyncThunk('userSlice/asyncFetchUserInfo', async() => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/'
  )
  const data = await res.json();
  return data;
})

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userInfo: [] as UserInfo[],
    status: 'init'
  },
  reducers: {
    resset: (state, action) => {
      console.log('-reset-', action);
      state.userInfo = [] as UserInfo[];
      state.status = 'reseted';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchUserInfo.pending, (state, action) => {
      console.log('--loading--', action);
      state.status = 'Loading';
    })
    builder.addCase(asyncFetchUserInfo.fulfilled, (state, action) => {
      console.log('--complete--', action);
      state.userInfo = action.payload;
      state.status = 'complete';
    })
    builder.addCase(asyncFetchUserInfo.rejected, (state, action) => {
      console.log('--fail--', action);
      state.status = 'fail';
    })
  }
})

export default userSlice;
export { asyncFetchUserInfo }