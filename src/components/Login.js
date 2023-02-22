import React from 'react';
import {auth, provider} from '../assets/firebase-config'
import { signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

 function Login({setIsAuth}) {

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider). then((result) => {
      localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate('/');
    })
  }

  return (
    <div className='login-container'>
      <p className='login-header'>Sign in with google to continue</p>
      <button className='login-btn'
       onClick={signInWithGoogle}
      >Sign In with Google</button>
    </div>
  )
}

export default Login
