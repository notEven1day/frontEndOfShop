import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { setCartId } from '../../src/cartIdSlice';
import './Header.css';
import UserInfoContainer from "./UserInfoClickableContainerSidePopUp/UserInfoContainer";
import AdminUserPageNavInNavbar from "../AdminUserPage/AdminUserPageNavInNavbar";


const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        id:"",
        username:"",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        profilePicUrl:"",
        role: "ADMIN",
        cartId: 7,
    };

    // useEffect(() => {
    //     fetch('/user/me', {
    //         method: 'GET',
    //         headers:     {
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //         .then(response => response.json()) //TO DO need to make a slice for whole current user
    //         .then(data => {
    //             userDto.id=data.id;
    //             userDto.username=data.username;
    //             userDto.firstName = data.firstName;
    //             userDto.lastName = data.lastName;
    //             userDto.email = data.email;
    //             userDto.phoneNumber = data.phoneNumber;
    //             userDto.profilePicUrl=data.profilePicUrl;
    //             userDto.role = data.role;
    //             dispatch(setCartId(data.cartId));
    //             // might be a big problem tbh need to check later when backend ready
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [dispatch]);


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