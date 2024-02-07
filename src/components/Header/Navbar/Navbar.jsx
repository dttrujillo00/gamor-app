
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { links } from './links'


export const Navbar = () => {

  // const darkmode = document.querySelector('#darkmode')

  const onChangeMode = (event) => {

    const icon = event.target;

    if(icon.classList.contains('bx-moon')) {
      icon.classList.replace('bx-moon', 'bx-sun')
      document.body.classList.add('active')
    } else {
      icon.classList.replace('bx-sun', 'bx-moon')
      document.body.classList.remove('active')
    }
  }

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
          <li>
            <i onClick={ onChangeMode } className="bx bx-moon bx-sm" id='darkmode'></i>
          </li>
          {/* <div className="bx bx-moon" id="darkmode"></div> */}
        </ul>

    </nav>
  )
}