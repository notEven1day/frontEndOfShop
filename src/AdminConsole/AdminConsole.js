import React, { useEffect, useState } from 'react';
import { Space, Table, Button, Tag } from 'antd';
import {useNavigate} from "react-router-dom";
const hardcodedProducts = [
    {
        ProductId: 1,
        Name: 'Product A',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product A',
        Price: 29.99,
        StockQuantity: 10,
        RoomCategories: ['Living Room', 'Bedroom'],
        FurnitureTypeCategories: ['Sofa', 'Modern'],
    },
    {
        ProductId: 2,
        Name: 'Product B',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product B',
        Price: 49.99,
        StockQuantity: 5,
        RoomCategories: ['Dining Room'],
        FurnitureTypeCategories: ['Chair', 'Vintage'],
    },
    {
        ProductId: 3,
        Name: 'Product C',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product C',
        Price: 89.99,
        StockQuantity: 8,
        RoomCategories: ['Office'],
        FurnitureTypeCategories: ['Desk', 'Ergonomic'],
    },
    {
        ProductId: 4,
        Name: 'Product C',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product C',
        Price: 89.99,
        StockQuantity: 8,
        RoomCategories: ['Office'],
        FurnitureTypeCategories: ['Desk', 'Ergonomic'],
    },
    {
        ProductId: 5,
        Name: 'Product C',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product C',
        Price: 89.99,
        StockQuantity: 8,
        RoomCategories: ['Office'],
        FurnitureTypeCategories: ['Desk', 'Ergonomic'],
    },
    {
        ProductId: 6,
        Name: 'Product C',
        ImageUrl: 'https://via.placeholder.com/150',
        Description: 'Description of Product C',
        Price: 89.99,
        StockQuantity: 8,
        RoomCategories: ['Office'],
        FurnitureTypeCategories: ['Desk', 'Ergonomic'],
    },
];
const AdminConsole = () => {
    const navigate=useNavigate();
    const [products, setProducts] = useState([]);
    const [columns, setColumns] = useState([]);

    // useEffect(() => {
    //     fetch('/products/getAllProducts')
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.length > 0) {
    //                 const sampleProduct = data[0];
    //                 const dynamicColumns = Object.keys(sampleProduct).map(key => {
    //                         return {
    //                             title: key.charAt(0).toUpperCase() + key.slice(1),
    //                             dataIndex: key,
    //                             key: key,
    //                         };
    //                 })
    //
    //                 // Add an action column with the update button
    //                 dynamicColumns.push({
    //                     title: 'Action',
    //                     key: 'action',
    //                     render: (_, record) => (
    //                         <Space size="middle">
    //                             <Button onClick={handleProductUpdate(record.ProductId)}>Update Product</Button>
    //                         </Space>
    //                     ),
    //                 });
    //
    //                 setColumns(dynamicColumns);
    //             }
    //             setProducts(data);
    //         })
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);

    // Handler for the update button
    const handleProductUpdate = (productId) => {
        navigate(`/updateProduct/${productId}`);
        console.log('Update product with ID:', productId);
        // You can navigate to an update page or open a modal here
    };

    useEffect(() => {
        setProducts(hardcodedProducts);
    })

    return (
        <div>
        <Table columns={columns} dataSource={products} />
        <Button onClick={() => handleProductUpdate(1)}>for abstraction</Button>
        </div>
    );
};

export default AdminConsole;
