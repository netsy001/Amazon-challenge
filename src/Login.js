import React, { useState } from 'react'
import "./Login.css"
import myshopLogo from './assets/My-shop.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
        // it creates an user with email and password and then if everything was good it comes back to auth object
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            //useHistory. Provides access to the history prop in React Router. Refers to the history package dependency that the router uses. A primary use case would be for programmatic routing with functions, like push , replace , etc.
            // Here after successfull registeration we are pushing to home page
            history.push('/');
        })
            .catch(error => alert(error.message))
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
