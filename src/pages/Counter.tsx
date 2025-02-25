import React from 'react'
import { decrement, increment } from '../stores/countSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispath = useAppDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispath(increment())}>INCREMENT</button>
      <button onClick={() => dispath(decrement())}>DECREMENT</button>
      
    </div>
  )
}

export default Counter
