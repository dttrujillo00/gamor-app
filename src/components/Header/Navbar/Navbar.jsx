import { NavLink } from 'react-router-dom'
import { links } from './links'
import './Navbar.css'
import { DarkLight } from '../DarkLight/DarkLight'


export const Navbar = () => {

  return (
    <nav className="navbar_container">
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
  )
}
