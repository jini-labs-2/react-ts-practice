import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

// コンポーネント内で
const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
     <h2 style={{textAlign: 'center'}}>Home</h2>  
    </div>
  )
}

export default Home
