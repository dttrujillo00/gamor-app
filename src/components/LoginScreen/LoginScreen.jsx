import { useContext } from "react"
import { AuthContext } from "../../auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { types } from "../../types/types";


export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Daniel'
            }
        })

        navigate(lastPath, { replace: true });
    }

  return (
    <>
        <h1>Login</h1>

        <hr />

        <button
            onClick={ handleLogin }
        >
            Login
        </button>
    </>
  )
}
