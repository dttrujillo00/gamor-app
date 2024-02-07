import { Link } from 'react-router-dom'
import './Logo.css'


export const Logo = () => {
  return (
    <div className="logo_container">
        {/* <h1>Gamor</h1> */}
        <h1>
          <Link to='/'>Gamor</Link>
        </h1>
    </div>
  )
}
