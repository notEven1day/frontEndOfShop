import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const mockedProduct = {
    ProductId: 1, // int
    Name: "Mocked Product", // string with a max length of 100
    ImageUrl: "http://example.com/image.jpg", // string (URL)
    Description: "This is a mocked product for testing purposes.", // string with a max length of 500
    Price: 99.99, // decimal
    StockQuantity: 50, // int
    RoomCategories: [
        {
            RoomCategoryId: 1,
            CategoryName: "Living Room"
        },
        {
            RoomCategoryId: 2,
            CategoryName: "Bedroom"
        }
    ], // array of RoomCategory objects
    FurnitureTypeCategories: [
        {
            FurnitureTypeCategoryId: 1,
            CategoryName: "Sofa"
        },
        {
            FurnitureTypeCategoryId: 2,
            CategoryName: "Bed"
        }
    ] // array of FurnitureTypeCategory objects
};
const ProductUpdateForm = () => {
    const { productId } = useParams();
    const [productToUpdate, setProductToUpdate] = useState([]);

    // useEffect(() => {
    //     fetch('/product/getProductToUpdate', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             productId: productId
    //         })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setProductToUpdate(data);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [productId]);
    // Dependency array to run this effect when productId changes

    useEffect(()=>{
        setProductToUpdate(mockedProduct);
    },[])

    return (
        <form style={formStyle}>
            <div style={formGroupStyle}>
                <label>Product ID: {productToUpdate.productId}</label>
            </div>
            <div style={formGroupStyle}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={productToUpdate.Name}
                    maxLength={100}
                    required
                    style={inputStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label>Image URL:</label>
                <input
                    type="text"
                    name="imageUrl"
                    value={productToUpdate.ImageUrl}
                    style={inputStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={productToUpdate.Description}
                    maxLength={500}
                    style={textareaStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={productToUpdate.Price}
                    required
                    style={inputStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label>Stock Quantity:</label>
                <input
                    type="number"
                    name="stockQuantity"
                    value={productToUpdate.StockQuantity}
                    required
                    style={inputStyle}
                />
            </div>
            <div style={formGroupStyle}>
                <label>Room Categories:</label>
                <ul>
                    {productToUpdate.RoomCategories.map(category => (
                        <li key={category.RoomCategoryId}>
                            {category.CategoryName}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={formGroupStyle}>
                <label>Furniture Type Categories:</label>
                <ul>
                    {productToUpdate.FurnitureTypeCategories.map(category => (
                        <li key={category.FurnitureTypeCategoryId}>
                            {category.CategoryName}
                        </li>
                    ))}
                </ul>
            </div>
            <button type="submit" style={buttonStyle}>Update Product</button>
        </form>
    );
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
};

const formGroupStyle = {
    marginBottom: '15px',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const textareaStyle = {
    width: '100%',
    height: '80px',
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default ProductUpdateForm;
