import React, {useState} from "react";

import {useNavigate} from "react-router-dom";
import {Button} from "antd";

const SignUp = () =>
{
    const navigate = useNavigate()
    const[username,setUsername]=useState("");
    const[firstName,setFirstName]=useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleFirstNameChange = (e) =>
    {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSignUp = () =>
    {


            fetch('/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber

                })
            })
                .then(response => {
                    if (response.ok) {
                       navigate(`/login`);
                    } else {
                        alert("Signup failed. Idk where");
                    }
                })
                .catch(error => console.error('Error:', error));

    }
    return(
        <div className="container">
            <h2>Sign Up</h2>
            <form action="/register" method="POST">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsernameChange} type="text" id="username" name="username" placeholder="Your username"
                           required/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={handleFirstNameChange} type="text" id="firstName" name="firstName"
                           placeholder="Enter your first name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={handleLastNameChange} type="text" id="lastName" name="lastName"
                           placeholder="Enter your last name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePasswordChange} type="text" id="password" name="password"
                           placeholder="Choose a password" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmailChange} type="text" id="email" name="email"
                           placeholder="Enter your email address" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input onChange={handlePhoneNumberChange} type="text" id="phoneNumber" name="phoneNumber"
                           placeholder="Enter your phone number"/>
                </div>
                <Button type="primary" onClick={handleSignUp} block={true}
                        style={{backgroundColor: '#28a745'}}>SignUp</Button>
            </form>

        </div>
    );
}
export default SignUp