import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { up, asyncUpFetch } from '../stores/counterSlice';
import { AppDispatch, RootState } from '../stores/store';

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => {
    return state.counter.value;
  });
  const status = useSelector((state: RootState) => {
    return state.counter.status;
  });
  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />

      <div>
        {count} | {status}
      </div>
    </div>
  );
}

export default Counter