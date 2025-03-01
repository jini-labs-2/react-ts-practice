 // Start of Selection
import React, { useEffect, useState } from 'react';

interface DynamicStyleComponentProps {
  styleString?: string;
}

 // Start of Selectされる
const DynamicStyleComponent: React.FC<DynamicStyleComponentProps> = ({ styleString }) => {
  const [styleId, setStyledId] = useState<string | null>(null);
  useEffect(() => {
    if (!styleString) return;

    const styleElement = document.createElement('style');
    const id = `dynamic-style-${Date.now()}`;
    styleElement.id = id;
    styleElement.textContent = styleString;
    document.head.appendChild(styleElement);

    setStyledId(id);

    console.log('dynamic render');
  }, [styleString])
  return (
    <div className='styled-component'>
      <p>動的にstyle適用される。</p>
    </div>
  )
}

export default DynamicStyleComponent
