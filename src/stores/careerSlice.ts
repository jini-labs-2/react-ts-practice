import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CareerInfo } from "./type"
//import careerInfo from "../data/career.data.json"
import careerInfo from "../data/career.data.json"

const asyncFetchCareerInfo = createAsyncThunk('careerSlice/asyncFetchCareerInfo', async() => {
  return careerInfo;
})

export const careerSlice = createSlice({
  name: "careerSlice",
  initialState: {
    careerInfo: {},
    status: 'init'
  },
  reducers: {
    resset: (state, action) => {
      console.log('-reset-', action);
      state.careerInfo = {};
      state.status = 'reseted';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncFetchCareerInfo.pending, (state, action) => {
      console.log('--loading--', action);
      state.status = 'Loading';
    })
    builder.addCase(asyncFetchCareerInfo.fulfilled, (state, action) => {
      console.log('--complete--', action);
      state.careerInfo = action.payload as CareerInfo;
      state.status = 'complete';
    })
    builder.addCase(asyncFetchCareerInfo.rejected, (state, action) => {
      console.log('--fail--', action);
      state.status = 'fail';
    })
  }
})

export default careerSlice;
export { asyncFetchCareerInfo }