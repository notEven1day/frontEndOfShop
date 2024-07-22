import React, {Component} from 'react';
import {useParams} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductInfoComponent from "./ProductInfoComponent";



const ProductInfoPage = () => {
    const { id } = useParams();
    return (
        <>
            <Header/>
            <ProductInfoComponent productId={id}></ProductInfoComponent>
            <Footer/>
        </>
    );
}

export default ProductInfoPage;