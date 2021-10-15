import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then((result) => {
                history.push(redirect_uri);
        })
    }

    return (
        <div className="login">
            <div>
                <h1>Login</h1>
                <form>
                    <input type="email" name="" id="" placeholder="your email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>New to Ema-john? <br /> <Link to="/register">Create an account</Link></p>
                <div>--------or---------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;