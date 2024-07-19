import React from 'react';
import './Header.css';
import UserInfoContainer from "./UserInfoClickableContainerSidePopUp/UserInfoContainer";
import AdminUserPageNavInNavbar from "../AdminUserPage/AdminUserPageNavInNavbar";
import {useNavigate} from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate()
    const handleHomeRedirection = () =>
    {
        navigate(`/`);
    }
    const handleAboutUsRedirection = () =>
    {
        navigate(`/aboutUs`);
    }
    const handleAdminUserPageRedirection = () =>
    {
        navigate(`/adminUserPage`);
    }
    const userDto = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        role: "ADMIN",
        cart_id: ""
    };

    fetch('/user/me', {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json()) // Parse the JSON from the response
        .then(data => {
            userDto.firstName = data.firstName;
            userDto.lastName = data.lastName;
            userDto.email = data.email;
            userDto.phoneNumber = data.phoneNumber;
            userDto.address = data.address;
            userDto.role=data.role;
            userDto.cart_id=data.cart_id;
        })
        .catch(error => console.error('Error:', error));


    return (
        <header className='Header'>

            <nav className='Navbar'>
                <ul>
                    <li onClick={handleHomeRedirection}>Home</li>
                    <li onClick={handleAboutUsRedirection}>About Us</li>
                    <li>Products</li>
                    <li>Contact</li>
                    {userDto.role.includes("ADMIN") &&
                        <li onClick={handleAdminUserPageRedirection} ><AdminUserPageNavInNavbar/></li>}
                </ul>
            </nav>


            <UserInfoContainer/>
        </header>

    );
}
export default Header;