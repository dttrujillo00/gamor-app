import { NavLink } from 'react-router-dom'
import { links } from './links'
import { DarkLight } from '../DarkLight/DarkLight'
import './Navbar.css'
import { useState } from 'react'

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showHideMenu = () => {

    setIsMenuOpen(!isMenuOpen)

  }

  return (

    <div className='navbar_container'>
      <i onClick={ showHideMenu } className={ isMenuOpen ? 'bx bx-x bx-sm' : 'bx bx-menu bx-sm' } id='icon_menu'></i>
      <nav className={ isMenuOpen ? 'navbar show' : 'navbar' }>
          <ul>
            {
              links.map( link => {
                return (
                  <li key={ link.title }>
                    <NavLink 
                      to={ link.to }
                      className={({ isActive }) => isActive ? "ellipse_decorator purple active":""}
                    >
                      { link.title }
                    </NavLink>
                  </li>
                )
              } )
            }
            <DarkLight />
          </ul>

      </nav>
    </div>
  )
}
