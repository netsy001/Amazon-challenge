import React, { useState } from 'react'
import "./Login.css"
import myshopLogo from './assets/My-shop.png';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();

    }

    return (

        <div className="login">
            <Link to="/">
                <img className="login__logo" src={myshopLogo} alt="myshopLogo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={signIn} className="login__signInButton">Sign in</button>

                </form>

                <p>By sigining-in you agree to my🛒shop's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button onClick={register} className="login__registerButton">Create your my🛒shop Account </button>

            </div>
        </div>

    )
}

export default Login
