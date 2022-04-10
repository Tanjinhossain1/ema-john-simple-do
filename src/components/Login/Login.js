import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    if(user){
        navigate(from)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        
       
        
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <h2>login</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>
                        {loading && <p>Loading...</p>}
                        <p style={{color: 'red'}}>{error?.message.slice(22,42)}</p>
                        <input className='submit-button' type="submit" value="Login" />
                        <p>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
                    </form>
                    <div className='or-container'>
                        <p className='or-left'></p>
                        <p>or</p>
                        <p className='or-right'></p>
                    </div>
                    <div className='google-button'>
                        <button><img width={40} src="https://cutewallpaper.org/21/google-logo-png-transparent-background/Google-Logo-Background-png-download-10241024-Free-.jpg" alt="" />Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;