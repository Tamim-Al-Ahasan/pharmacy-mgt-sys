// // Signup.js
// import React from 'react';

// function Signup() {
//   // Add your signup form and logic here
//   return (
//     <div>
//       <h3>This is Signup</h3>
//       {/* Your signup form */}
//     </div>
//   );
// }
import s from './css/login.css';

import React, { useState } from "react";
import { Outlet, Route, Routes, Link } from "react-router-dom";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="your-name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your-email@email.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>

        {/* <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button> */}

        <Link to="/login"><button>Already have an account? Login here.</button></Link>
    
    </div>
    )
}


export default Signup;
