import React, { useState, useEffect } from 'react';
import Product from './ContentElements/Product';
import './Content.css';
import SideNavigation from "./ContentElements/SideNavigation";

const Content = () => {
    const [products, setProducts] = useState([]);
        //products is empty here
    const hardCodedArrayOfProducts = [
        {
            productId: 1,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductA',
            price: 19.99,
            stockQuantity: 100,
            roomCategories: [], // Assume this would be populated with relevant data
            furnitureTypeCategories: [] // Assume this would be populated with relevant data
        },
        {
            productId: 2,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductB',
            price: 29.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 3,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductC',
            price: 24.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 4,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductA',
            price: 19.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 5,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductB',
            price: 29.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 6,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductC',
            price: 24.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 7,
            name: 'ProductA',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductA',
            price: 19.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 8,
            name: 'ProductB',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductB',
            price: 29.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        },
        {
            productId: 9,
            name: 'ProductC',
            imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
            description: 'Description for ProductC',
            price: 24.99,
            stockQuantity: 100,
            roomCategories: [],
            furnitureTypeCategories: []
        }
        // Add more products as needed
    ];

    useEffect(() => {
    setProducts(hardCodedArrayOfProducts);
    }, []);

    // useEffect(() => {
    //     fetch('/api/product/getAllProducts')
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
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    description={product.description}
                    price={product.price}
                    stockQuantity={product.stockQuantity}
                    roomCategories={product.roomCategories}
                    furnitureTypeCategories={product.furnitureTypeCategories}
                />
            ))}
        </div>
        </div>
    );
    //you need to set the properties of the product when backend ready
}

export default Content;
