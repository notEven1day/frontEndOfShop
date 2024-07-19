import React, { useState, useEffect } from 'react';
import Product from './ContentElements/Product';
import './Content.css';
import SideNavigation from "./ContentElements/SideNavigation";

const Content = () => {
    const [products, setProducts] = useState([]);
        //products is empty here
    const hardCodedArrayOfProducts = [
        {
            id: 1,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 19.99
        },
        {
            id: 2,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 29.99
        },
        {
            id: 3,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 24.99
        },
        {
            id: 4,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 19.99
        },
        {
            id: 5,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 29.99
        },
        {
            id: 6,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 24.99
        },
        {
            id: 7,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 19.99
        },
        {
            id: 8,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 29.99
        },
        {
            id: 9,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            price: 24.99
        },
        // Add more products as needed
    ];
    useEffect(() => {
    setProducts(hardCodedArrayOfProducts);
    }, []);

    // useEffect(() => {
    //     fetch('/api/products')
    //         .then(response => response.json())
    //         .then(data => {
    //             setProducts(date);
    //             //when setProducts is called product=data; setProducts(data) when backend ready
    //         })
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);


    return (
        <div className="ContentPlusNav">
        <SideNavigation/>
        <div className="Content">
            {products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                />
            ))}
        </div>
        </div>
    );
    //you need to set the properties of the product when backend ready
}

export default Content;
