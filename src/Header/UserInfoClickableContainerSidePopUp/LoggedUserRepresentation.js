import React from "react";
import {useSelector} from "react-redux";
import {Button, Dropdown} from "antd";
import {useNavigate} from "react-router-dom";

const LoggedUserRepresentaiton = () =>
{
    const navigate = useNavigate()
    const user = useSelector((state) => state.user);
    const handeUserLoggindOut = () =>
    {
        localStorage.removeItem("token");
        navigate(`/`);
    }
    const items = [
        {
            key: '1',
            label: (
                <p>Username: {user.username}</p>
            ),
        },
        {
            key: '2',
            label: (
                <p>Fisrt name: {user.firstName}</p>
            ),
        },
        {
            key: '3',
            label: (
                <p>Last name: {user.lastName}</p>
            ),
        },
        {
            key: '4',
            label: (
                <p>Email: {user.email}</p>
            ),
        },
        {
            key: '5',
            label: (
                <p>Phone number: {user.phoneNumber}</p>
            ),
        },
        {
            key: '6',
            label: (
                <Button danger type="primary" block={true} onClick={handeUserLoggindOut}>Log out</Button>
            ),
        },
    ];

    return (
        <Dropdown menu={{ items }} placement="top">
        <img src={user.profilePicUrl} style={{ maxWidth: '75px', maxHeight: '55px',objectFit: 'cover' }} />
        </Dropdown>
    );
}

export default LoggedUserRepresentaiton;