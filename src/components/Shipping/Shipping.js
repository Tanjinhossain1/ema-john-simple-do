import React, { useState } from 'react';

const Shipping = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handleNumber = (e)=>{

    }
    const handleName = event => {
        setName(event.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <h2>Sign UP</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handleName} type="password" name="password" id="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm-Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{errors}</p>
                        <p style={{ color: 'red' }}>{error?.message.slice(22, 42)}</p>
                        {loading && <p>Loading...</p>}
                        <input className='submit-button' type="submit" value="Login" />
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
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

export default Shipping;