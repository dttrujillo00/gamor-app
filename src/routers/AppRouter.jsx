import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { DashboardRoutes } from "./DashboardRoutes"
import { LoginScreen } from "../components/LoginScreen/LoginScreen"


export const AppRouter = () => {

    const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
          <Route
              exact
              path="/login"
              element={ user.logged ? (<Navigate to={'/'} />) : (<LoginScreen />) }     
          />
          <Route 
              path="*"
              element={ user.logged ? (<DashboardRoutes />) : (<Navigate to={'/login'} />) }
          />
      </Routes>
    </BrowserRouter>
  )
}
