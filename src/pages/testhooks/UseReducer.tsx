import React, { useReducer } from 'react'

const reducer = (state: number, action: {type: string}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }

}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h2>Test useState</h2>
      <h3>Count : {count} </h3>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default UseReducer
