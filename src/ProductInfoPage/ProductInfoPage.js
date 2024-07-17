import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const ProductInfoPage = () => {
    const { name } = useParams()
    console.log(name)
    return (
        <>
            <Header/>
            <div className="imageContainer"></div>
            <div className="moreInfoContainer">
                <div className="nameContainer"></div>
                <div className="descriptionContainer"></div>
                <div className="priceContainer">
                    <div className="quantity"></div>
                    <div className="price"></div>
                </div>
                <div className="deliveryDetails"></div>
            </div>
            <Footer/>
            //to do fix the layout
        </>
    );
}

export default ProductInfoPage;