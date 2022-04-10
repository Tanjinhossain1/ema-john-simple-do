import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [user] = useAuthState(auth);
    const handleNumber = (e)=>{
        setNumber(e.target.value)
    }
    const handleName = event => {
        setName(event.target.value)
    }
    // if(number.length !== 11){
    //     return;
    // }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(name, number);
    
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <h2>Added Shipping</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name="email" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleName} type="text" name="name" id="" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input onBlur={handleNumber} type="number" name="number" id="" required />
                        </div>            
                        <input className='submit-button' type="submit" value="Submit" />                     
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipping;