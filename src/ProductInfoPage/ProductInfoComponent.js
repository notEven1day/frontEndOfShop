import React, { useState } from 'react';
import './ProductInfoComponent.css'; // Assuming you have a CSS file for styling

const ProductInfo = ({ id, name, imageUrl, description, price, stockQuantity, roomCategories, furnitureTypeCategories, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(Math.max(1, Math.min(stockQuantity, parseInt(e.target.value, 10))));
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            onAddToCart(id, quantity);
        }
    };

    return (
        <div className="product-info">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                <p className="product-stock">Stock: {stockQuantity}</p>
                {roomCategories.length > 0 && (
                    <div className="product-room-categories">
                        <h4>Room Categories:</h4>
                        <ul>
                            {roomCategories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {furnitureTypeCategories.length > 0 && (
                    <div className="product-furniture-categories">
                        <h4>Furniture Type Categories:</h4>
                        <ul>
                            {furnitureTypeCategories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="product-actions">
                    <input
                        type="number"
                        min="1"
                        max={stockQuantity}
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="quantity-selector"
                    />
                    <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
