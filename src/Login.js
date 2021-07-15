import React from 'react'
import "./Login.css"
import myshopLogo from './assets/My-shop.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={myshopLogo} alt="myshopLogo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button className="login__signInButton">Sign in</button>
                </form>
                <p>By sigining-in you agree to my🛒shop's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="login__registerButton">Create your my🛒shop Account </button>
            </div>
        </div>

    )
}

export default Login
