import React from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <div>
      <div style={{margin: '12px'}} >
        {mainMenu.map((item, index) => (<>
            <Link
              key={index}
              to={item.to}
              style={{textAlign: 'center', padding: '8px', margin: '12px'}}
            >{item.name.toUpperCase()}</Link>
          </>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default Header
