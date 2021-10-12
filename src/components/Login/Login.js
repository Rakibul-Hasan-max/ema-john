import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div>
                <h1>Login</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <br /> <Link to="/register">Create an account</Link></p>
                <div>--------or---------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;