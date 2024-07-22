import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import { setCartId } from '../../src/cartIdSlice';
import './Header.css';
import UserInfoContainer from "./UserInfoClickableContainerSidePopUp/UserInfoContainer";
import AdminUserPageNavInNavbar from "../AdminUserPage/AdminUserPageNavInNavbar";
import {
    setEmail,
    setFirstName,
    setId,
    setLastName,
    setPhoneNumber,
    setProfilePicUrl,
    setRole,
    setUsername
} from "../userSlice";


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
    useEffect(() => {
        dispatch(setId(userDto.id));
        dispatch(setUsername(userDto.username));
        dispatch(setFirstName(userDto.firstName));
        dispatch(setLastName(userDto.lastName));
        dispatch(setEmail(userDto.email));
        dispatch(setPhoneNumber(userDto.phoneNumber));
        dispatch(setProfilePicUrl(userDto.profilePicUrl));
        dispatch(setRole(userDto.role));
        dispatch(setCartId(userDto.cartId));
    }, [dispatch,userDto.cartId]);

    // useEffect(() => {
    //     fetch('/user/me', {
    //         method: 'GET',
    //         headers:     {
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //         .then(response => response.json()) //TO DO need to make a slice for whole current user
    //         .then(data => {
    //             dispatch(setId(data.id));
    //             dispatch(setUsername(data.username));
    //             dispatch(setFirstName(data.firstName));
    //             dispatch(setLastName(data.lastName));
    //             dispatch(setEmail(data.email));
    //             dispatch(setPhoneNumber(data.phoneNumber));
    //             dispatch(setProfilePicUrl(data.profilePicUrl));
    //             dispatch(setRole(data.role));
    //             dispatch(setCartId(data.cartId));
    //             // might be a big problem tbh need to check later when backend ready
    //         }).problem{dispatch(clearUsername())................}
    //         .catch(error => console.error('Error:', error));
    // }, [dispatch]);
    // also need to change line 91 userDto.role.includes("ADMIN") to userSlice.includes("ADMIN") when backend ready
    //401 means token expired

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