import React, { useState } from 'react'
import { useGeneratedIds } from '../../hooks/useGenerateIds';





const UseId_2 = () => {
  const [fields, setFields] = useState<number[]>([]);
  
  const addField = () => {
    setFields((prev) => [...prev, prev.length]); // 단순한 숫자로 필드 추가
  };

  const idList = useGeneratedIds(fields.length); 

  return (
    <div>
      <button onClick={addField}>add input field</button>
      {fields ? fields.map((_, index) => (
        <div key={idList[index]}>
          <label htmlFor={idList[index]}>
            input {index + 1}
            <input id={idList[index]} type='text' />
          </label>
        </div>
      )) : ''}
    </div>
  )
}

export default UseId_2

