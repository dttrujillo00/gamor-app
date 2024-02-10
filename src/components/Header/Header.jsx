import { Logo } from "./Logo/Logo"
import { Navbar } from "./Navbar/Navbar"
import { SignUpSignIn } from "./SignUpSignIn/SignUpSignIn"
import { Outlet } from "react-router-dom"
import './Header.css'

export const Header = () => {
  return (
    <>
      <div className="header_container">
          <Navbar />
          <Logo />
          <SignUpSignIn />
      </div>

      <Outlet />
    
    </>
  )
}
