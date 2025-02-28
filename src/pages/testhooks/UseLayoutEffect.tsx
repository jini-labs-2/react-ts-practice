import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
  const refLabel = useRef<HTMLLabelElement>(null);
  const [divWidth, setDivWidth] = useState(0);  
  const [inputValue, setInputValue] = useState<string>('');  

  // useEffect(() => {
  //   if (refLabel.current) {
  //     setDivWidth(refLabel.current.getBoundingClientRect().width);
  //   }
  //   console.log('--s0201--')
  // }, [inputValue]);

  useLayoutEffect(() => {
    if (refLabel.current) {
      setDivWidth(refLabel.current.getBoundingClientRect().width);
    }
    console.log('--s0201--')
  }, [inputValue]);

  console.log('--s0202--')
  return (
    <>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /><br/>
      <label ref={refLabel}>この要素の幅は{divWidth}pxです.入力値は{inputValue}です</label>
    </>
  );
}

export default UseLayoutEffect