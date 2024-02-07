
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
  return (
    <nav className="navbar-container">
        <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/streams'>Streams</NavLink>
            </li>
            <li>
              <NavLink to='/party'>Party</NavLink>
            </li>
            <li>
              <NavLink to='/premium'>Premium</NavLink>
            </li>
        </ul>
    </nav>
  )
}
