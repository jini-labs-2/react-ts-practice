import React, { useCallback, useState } from 'react'

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div>
      <CountButtonMemo onClick={increment} />
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

export const CountButtonMemo = React.memo(CountButton);
export default UseCallback
