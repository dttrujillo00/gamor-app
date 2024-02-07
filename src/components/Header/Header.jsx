import { Logo } from "./Logo/Logo"
import { Navbar } from "./Navbar/Navbar"
import { SignUpSignIn } from "./SignUpSignIn/SignUpSignIn"

import './Header.css'
import { Outlet } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <div className="header-container">
          <Navbar />
          <Logo />
          <SignUpSignIn />
      </div>

      <Outlet />
    
    </>
  )
}
