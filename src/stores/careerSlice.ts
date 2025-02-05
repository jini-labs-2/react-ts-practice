import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CareerInfo } from "./type"
//import careerInfo from "../data/career.data.json"
import careerInfo from "../data/career.data.json"

const fileId = "1jBZ02TBKlAl1Z3uiECEmsvH1MRd5N7R9";
const asyncFetchCareerInfo = createAsyncThunk('careerSlice/asyncFetchCareerInfo', async() => {
  // const res = await fetch(`https://drive.google.com/uc?export=download&id=${fileId}`);
  // const data = await res.json();
  // return data;
  return careerInfo;
})

export const careerSlice = createSlice({
  name: "careerSlice",
  initialState: {
    careerInfo: {} as CareerInfo,
    status: 'init'
  },
  reducers: {
    resset: (state, action) => {
      console.log('-reset-', action);
      state.careerInfo = {} as CareerInfo;
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
      state.careerInfo = action.payload as unknown as CareerInfo;
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