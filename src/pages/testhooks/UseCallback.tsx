import React, { useState } from 'react'

const UseCallback = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(prev => prev + 1);
  }
  return (
    <div>
      <CountButton onClick={increment} />
      <CountView count={count} />
    </div>
  )
}

function CountView({count}:{count:number}) {
  return <span
        style={{padding: "4px", fontSize: "1rem"}}
  >{count}</span>
}

function CountButton({onClick}: {onClick: () => void}) {
  console.log("countButton rendering.");
  return ( 
    <>
      <h1>use Callback Example</h1>
      <button
        onClick={onClick}
        style={{padding: "8px", backgroundColor: "#3393ff", color: "white", fontSize: "1rem"
        }}
      >Increment</button>
    </>
  )
}

export default UseCallback
