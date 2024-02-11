import { useEffect, useReducer } from "react"
import { authReducer } from "./auth/authReducer"
import { AuthContext } from "./auth/AuthContext"
import { AppRouter } from "./routers/AppRouter"

const init = () => {
  return JSON.parse(sessionStorage.getItem('user')) || { logged: false };
}

export const GamorApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (

    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
