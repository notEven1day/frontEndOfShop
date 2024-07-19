import React, {Component, useState} from 'react';
import './LoginForm.css';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";




const LoginForm = () => {
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const  [password, setPassword] =useState("")

    const handleEmailChange = (e) => {
        // Validation

        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const token = 'dsadadasdsadasd';
    const handleLogin = () =>
    {

        localStorage.setItem("token",token);
        console.log(localStorage.getItem("token"))
        navigate(`/`);
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // "Authorization": `Bearer ${token}`
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //         password: password
        //     })
        // })
        //     .then(token => {
        //         if (token!=null) {
        //             localStorage.setItem(token);
        //            navigate(`/`);
        //
        //         } else {
        //             alert("Login failed. Please check your username and password.");
        //         }
        //     })
        //     .catch(error => console.error('Error:', error));
        // 401==> reditect to login
    }
    const handleSignUp = () =>{
        navigate(`/signUp`);
    }
    return (
        <div className="container">
            <h2>Welcome to our shop!</h2>
            <form id="loginForm">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmailChange} type="text" id="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePasswordChange} type="password" id="password" name="password" required/>
                </div>
                <Button type="primary" block={true} onClick={handleLogin}>Log in</Button>
            </form>
            <div className="forgot-password">
                <a href="#" id="forgotPasswordLink">Forgot password?</a>
            </div>
            <div className="signup-section">
                <p>Don't have an account?</p>
                <Button type="primary"  onClick={handleSignUp} style={{ backgroundColor: '#28a745', marginLeft: '20px' }}>Sign Up</Button>
            </div>


        </div>
    );
}

export default LoginForm;