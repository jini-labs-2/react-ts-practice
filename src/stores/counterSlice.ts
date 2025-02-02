import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  const res = await fetch(
    'https://linkcount.toolforge.org/api/?page=Main_Page&project=en.wikipedia.org&namespaces=0,1'
  );
  const data = await res.json();
  console.log(data);
  return data.redirects;
});

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
    status: 'Welcome',
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      console.log('loading---', action);
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      console.log('--fail--', action)
      state.status = 'fail';
    });
  },
});
export default counterSlice;
export const { up } = counterSlice.actions;
export { asyncUpFetch };
