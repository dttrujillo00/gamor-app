import { useContext, useState } from "react"
import { AuthContext } from "../../auth/AuthContext"
import { useNavigate } from "react-router-dom"
import { types } from "../../types/types";
import './LoginScreen.css'
import { users } from "../../data/users";


export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const verifyCredentials = (username, password) => {

        const user = users.find( user => {
            return user.username === username && user.password === password
        } )

        return !(typeof user === 'undefined')

    }

    const onInputChange = ({ target }) => {
        
        const newValue = target.value.trim()

        switch (target.name) {
            case 'username':
                setUsername(newValue)
                break;
            case 'password':
                setPassword(newValue)
                break;
        
            default:
                break;
        }
    }

    const handleLogin = (event) => {

        event.preventDefault();
        
        if(verifyCredentials(username, password)) {
            const lastPath = localStorage.getItem('lastPath') || '/';
    
            dispatch({
                type: types.login,
                payload: {
                    username
                }
            })
    
            navigate(lastPath, { replace: true });
        }

    }

  return (
    <div className="loginScreen">

        <form onSubmit={ handleLogin }>
            <h1>Sign in</h1>

            <div className="inputs_container">
                <input onChange={ onInputChange } value={ username } name="username" type="text" placeholder="username" autoComplete="false" />
                <input onChange={ onInputChange } value={ password } name="password" type="password" placeholder="password" autoComplete="false" />
            </div>


            <button
                type='submit'
            >
                Sign in
            </button>
        </form>

    </div>
  )
}
