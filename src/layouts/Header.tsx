import React from 'react'
import { Link } from 'react-router-dom'

interface MenuItem {
  to: string;
  name: string;
}

const mainMenu: MenuItem[] = [
  {to: '/home', name: 'home'},
  {to: '/hooks/useform', name: 'useform'},
  {to: '/hooks/usecallback', name: 'usecallback'},
  {to: '/hooks/usestate', name: 'usestate'},
  {to: '/hooks/usereducer', name: 'usereducer'},
  {to: '/about', name: 'about'},
  {to: '/contact', name: 'contact'}
];

const Header = () => {
  return (
    <header id='header'>
      <div className='header_wrap'>
        <div className='top_nav'>
          {mainMenu.map((item, index) => (
            <Link
              className='nav_item'
              key={index}
              to={item.to}
            >{item.name.toUpperCase()}</Link>
          ))}
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
