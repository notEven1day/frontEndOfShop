import React, {Component, useState} from 'react';
import './LoginForm.css';
import {Button} from "antd";
import {useNavigate} from "react-router-dom";




const LoginForm = () => {
    const navigate = useNavigate()


    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const  [password, setPassword] =useState("")

    const handleUsernameOrEmailChange = (e) => {
        // Validation

        setUsernameOrEmail(e.target.value)
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
        // fetch('/user/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // "Authorization": `Bearer ${token}`
        //     },
        //     body: JSON.stringify({
        //         usernameOrEmail: usernameOrEmail,
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
                    <label htmlFor="usernameOrEmail">Username or Email</label>
                    <input onChange={handleUsernameOrEmailChange} type="text" id="usernameOrEmail" name="usernameOrEmail" required/>
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