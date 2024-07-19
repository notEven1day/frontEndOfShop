import React from 'react';

import {Link, useNavigate} from 'react-router-dom';
import './Product.css';

function Product({ id, name, description, price, categoryId, stockQuantity,imageUrl}) {
    const navigate = useNavigate()

    const productInfoPageRedirector=()=>{
        navigate(`/product/${name}`);
    }


    return (

        <div onClick={productInfoPageRedirector} className="Product" >
            <img src={imageUrl} />
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>

    );
}

export default Product;