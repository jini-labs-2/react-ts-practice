import React, { ChangeEvent, useState } from 'react'
import DynamicStyleComponent from '../../components/DynamicStyleComponent';

const UseInsertionEffect = () => {
  const [readyStyle, setReadyStyle] = useState<string>('');
  const [style, setStyle] = useState<string>(readyStyle);


  const handleInputChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setReadyStyle(e.target.value);
  }

  function applyDynamicStyle() {
    setStyle(readyStyle);
  }

  return (
    <div>
      <div>
        <textarea
          placeholder='input style.'
          value={readyStyle}
          onChange={handleInputChange}
        />
        <br />
        <p>入力例：{".styled-component { color: red; }"}</p>
        <button onClick={applyDynamicStyle}>適用する</button> 
        <hr />
        <DynamicStyleComponent styleString={style} />
      </div>
    </div>
  )
}

export default UseInsertionEffect
