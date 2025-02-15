import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../index.css';

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  console.log('--s0000--', theme)
  return (
    <div className={`theme-${theme}`}>
      <h2 style={{textAlign: 'center'}}>Contact</h2> 
    </div>
  )
}

export default Contact
