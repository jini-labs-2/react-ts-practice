import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {setCount(prev => prev + 1)}
  const decrement = () => {setCount(prev => prev - 1)}
  return (
    <div>
      <h2>Test useState</h2>
      <h3>Count : {count} </h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default UseState
