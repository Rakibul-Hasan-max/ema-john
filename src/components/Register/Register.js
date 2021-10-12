import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <div>
                <h2>Register: create account</h2>
                <form onSubmit="">
                    <input type="text" name="" id=""  placeholder="your name"/>
                    <br />
                    <input type="email" name="" id="" placeholder="your email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="Create an account" />
                </form>
                <p>Already have an account? <Link to="/login">LogIn</Link></p>
                <div>--------or---------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;