import React from 'react';
import{ BrowserRouter, Route, Routes} from "react-router-dom";
import ProductInfoPage from "./ProductInfoPage/ProductInfoPage";

import './App.css';
import Home from "./Home/Home";
import Login from "./LoginPage/Login";
import SignUp from "./SignUpPage/SignUp";
import AdminUserPage from "./AdminUserPage/AdminUserPage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {<Home />} />
                <Route path="/product/:id" element={<ProductInfoPage />} />
                <Route path="/login" exact element = {<Login />} />
                <Route path="/signUp" exact element = {<SignUp />} />
                <Route path="/adminUserPage" exact element = {<AdminUserPage />} />
                <Route path="/aboutUs" exact element = {<AboutUsPage/>} />

                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
