import React from 'react';
import{ BrowserRouter, Route, Routes} from "react-router-dom";
import ProductInfoPage from "./ProductInfoPage/ProductInfoPage";

import './App.css';
import Home from "./Home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {<Home />} />
                <Route path="/product/:name" element={<ProductInfoPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
