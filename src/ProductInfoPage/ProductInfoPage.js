import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductInfoComponent from "./ProductInfoComponent";



const ProductInfoPage = () => {
    return (
        <>
            <Header/>
            <ProductInfoComponent></ProductInfoComponent>
            //absolutely fucked everything here need to create a slice for product so i dont fetch
            <Footer/>
            //to do fix the layout
        </>
    );
}

export default ProductInfoPage;