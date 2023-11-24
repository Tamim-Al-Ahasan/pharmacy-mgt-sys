// // Login.js
// import React from 'react';

// function Login() {
//   // Add your login form and logic here
//   return (
//     <div>
//       <h3>This is Login</h3>
//       {/* Your login form */}
//     </div>
//   );
// }

// export default Login;

import s from './css/login.css';

import {Link, Route, Routes} from 'react-router-dom';
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your-email@email.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup here.</button> */}
        
            <Link to="/signup"><button>Don't have an account? Signup here.</button></Link>
        
        
        </div>
    )
}

export default Login;



