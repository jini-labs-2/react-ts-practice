import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../index.css'

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer id="footer" className={`theme-${theme}`}>
      <div className='footer_wrap'>
        <hr /> 
        <h4 style={{textAlign: "center"}}> --F-O-O-T-E-R-- </h4>
      </div>
    </footer>
  )
}

export default Footer
