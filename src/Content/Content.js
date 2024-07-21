import React, { useState, useEffect } from 'react';
import Product from './ContentElements/Product';
import './Content.css';
import SideNavigation from "./ContentElements/SideNavigation";
import {Pagination} from "antd";
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
    },
    {
        productId: 10,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 11,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 12,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 13,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 14,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },{
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
    },
    {
        productId: 10,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 11,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 12,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 13,
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Description for ProductC',
        price: 24.99,
        stockQuantity: 100,
        roomCategories: [],
        furnitureTypeCategories: []
    },
    {
        productId: 14,
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

const Content = () => {
    const [products, setProducts] = useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [productsPerPage]=useState(12);
        //products is empty here

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

    const indexOfLastProduct=currentPage*productsPerPage;
    const indexOfFirstProduct=indexOfLastProduct-productsPerPage;
    const currentProducts=products.slice(indexOfFirstProduct,indexOfLastProduct)

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
        <div className="ContentPlusNav">
        <SideNavigation/>
        <div className="Content">
            {currentProducts.map(product => (
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
        <Pagination defaultCurrent={1} total={products.length} onChange={handlePageChange} align="center" pageSize={productsPerPage}/>
        </div>
    );
    //you need to set the properties of the product when backend ready
}

export default Content;
