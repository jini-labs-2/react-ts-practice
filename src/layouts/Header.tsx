import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';
import '../index.css';

interface MenuItem {
  to: string;
  name: string;
}

const mainMenu: MenuItem[] = [
  {to: '/home', name: 'home'},
  {to: '/about', name: 'about'},
  {to: '/contact', name: 'contact'}
];

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <header id='header' className={`header theme-${theme}`}>
      <div className='header_wrap'>
        <div style={{margin: '12px'}} >
          {mainMenu.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              style={{textAlign: 'center', padding: '8px', margin: '12px'}}
            >{item.name.toUpperCase()}</Link>
          ))}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'light' ? 'dark' : 'light'}
        </button>
      </div>
      <hr />
    </header>
  )
}

export default Header
