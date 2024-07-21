import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import './UserInfoContainer.css';
import { Button, Dropdown, Menu } from "antd";
import ProductInCart from "./ProductInCart";
import {useSelector} from "react-redux";

const mockCartData = {
    cartId: 1,
    cartItems: [
        {
            cartItemId:1,
            product: {
                id: 1,
                name: "Product A",
                imageUrl: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
                price: 19.99
            },
            quantity: 2
        },
        {
            cartItemId:2,
            product: {
                id: 2,
                name: "Product B",
                imageUrl: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
                price: 29.99
            },
            quantity: 1
        }
    ]
};

const UserInfoContainer = () => {
    const navigate = useNavigate();
    const handleUserInfoClick = () => {
        navigate(`/login`);
    };
    const cartId = useSelector((state) => state.cartId.cartId);
    //cartId is property of cartId reducer
    const [cart, setCart] = useState(null);
    useEffect(() => {
        if (cartId) {
            fetch('/cart/getCartById', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartId: cartId,
                })
            })
                .then(response => response.json())
                .then(data => {
                    if (data && data.cartItems) {
                        setCart(data);
                    } else {
                        setCart(null);
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            console.log("penis");
            console.log(cartId);
            setCart(mockCartData); // Simulate fetching cart data
        }
    }, [cartId]);


    //TO DO neex to fix this shit when backendready
    const handleRemovalFromCart = (cartId,cartItemId) =>
    {
        fetch('/cart/removeCartItem', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartId: cartId,
                cartItemId: cartItemId,
            })
        }).then(response => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Failed to remove cartItem. Status:', response.status);
                }
            })
                .catch(error => console.error('Error:', error));

    }


    // Generate menu items from cart data
    const menuItems = (
        <Menu>
            {cart && cart.cartItems.map((item, index) => (
                <Menu.Item key={index}>
                    <ProductInCart
                        id={item.cartItemId}
                        imageUrl={item.product.imageUrl}
                        name={item.product.name}
                        price={item.product.price}
                        quantity={item.quantity}

                    />
                    <Button block={true} onClick={handleRemovalFromCart(cartId,item.cartItemId)}>Remove from cart</Button>
                </Menu.Item>
            ))}
            <Menu.Item key="checkout">
                <Button type="primary" block>Go to checkout</Button>
            </Menu.Item>
            <Menu.Item key="total">
                <p>Total: ${cart && cart.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0).toFixed(2)}</p>
            </Menu.Item>
        </Menu>
    );
    //this shit fucking closes when editing quantity
    return (
        <div className='UserInfoContainer'>
            <Dropdown overlay={menuItems} trigger={['click']} placement="bottomRight">
                <ShoppingCartOutlined className="ShoppingCartIcon" />
            </Dropdown>
            <UserOutlined onClick={handleUserInfoClick} />
        </div>
    );
};

export default UserInfoContainer;
