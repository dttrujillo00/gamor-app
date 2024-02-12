import PropTypes from 'prop-types'
import './SignUpSignIn.css'
import { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { useNavigate } from 'react-router';
import { types } from '../../../types/types';

export const SignUpSignIn = ({ order }) => {

  const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch({
      type: types.logout,
  })

  navigate('/login', { replace: true });
  }

  return (
    <div className={`sign_container ${order}`}>
        <button onClick={ handleSignOut } className='signin_btn'>Sign out</button>
        <button className='signup_btn'>Create account</button>
    </div>
  )
}

SignUpSignIn.propTypes = {
  order: PropTypes.string
}
