import React, {useState} from 'react';
import './ProductInCart.css';
import {useSelector} from "react-redux";

function ProductInCart({id, imageUrl, name, price,quantity}) {
    const cartId = useSelector((state) => state.cartId.cartId);
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity);

    const handleQuantityChange = (event) => {
        setUpdatedQuantity(event.target.value);
    };

    const handleQuantityUpdate=()=>
    {
        fetch('/cart/changeInProductItemQuantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartId:cartId,
                cartItemId: id,
                quantity:updatedQuantity,
            })
        })
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Failed to update quantity. Status:', response.status);
                }
            })
            .catch(error => console.error('Error:', error));
    }
    return (
        <div className="product-in-cart">
            <img src={imageUrl} alt={name} className="product-image"/>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price.toFixed(2)}</p>
                <div className="quantity-container">
                    <label htmlFor="quantity" className="quantity-label">Quantity:</label>
                    <input
                        type="number"
                        id={`quantity-${id}`}
                        className="quantity-input"
                        min="1"
                        value={updatedQuantity}
                        onChange={handleQuantityChange}
                        onBlur={handleQuantityUpdate}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductInCart;