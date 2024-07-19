import React, {Component, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import './UserInfoContainer.css';
import {Dropdown, Menu} from "antd";

const UserInfoContainer = () =>{
    const navigate = useNavigate()
    const handleUserInfoClick = () =>{
       navigate(`/login`);
    }
    const [cart,setCart] = useState();


    const menuItems = (
        <Menu>
            <Menu.Item key="1">
                <a>Profile</a>
            </Menu.Item>
            <Menu.Item key="2">
                <a>Settings</a>
            </Menu.Item>
            <Menu.Item key="3">
                <a>Logout</a>
            </Menu.Item>
        </Menu>
    );

    return(
        <div className='UserInfoContainer'>
            <Dropdown overlay={menuItems} trigger={['hover']} placement="bottomRight">
            <ShoppingCartOutlined className="ShoppingCartIcon" />
             </Dropdown>
            <UserOutlined onClick={handleUserInfoClick} > </UserOutlined>
        </div>

    );
}

export default UserInfoContainer;