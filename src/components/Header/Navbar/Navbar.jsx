
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { links } from './links'


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
                    className={({ isActive }) => isActive ? "ellipse_decorator active":""}
                  >
                    { link.title }
                  </NavLink>
                </li>
              )
            } )
          }
        </ul>
    </nav>
  )
}
