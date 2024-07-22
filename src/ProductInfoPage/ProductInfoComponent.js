import React, {useEffect, useState} from 'react';
import './ProductInfoComponent.css';
import {Button} from "antd";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
// Assuming you have a CSS file for styling
const mockedProduct={
        name: 'ProductC',
        imageUrl: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
            '\n' +
            'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.\n' +
            '\n' +
            'Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam dolor ligula, faucibus id sodales in, auctor fringilla libero. Pellentesque pellentesque tempor tellus eget hendrerit. Morbi id nulla convallis, dapibus mauris nec, fermentum nunc. Sed pretium lectus massa, non gravida felis ullamcorper vel. Integer convallis orci vel mi laoreet posuere. Phasellus hendrerit interdum sagittis. Aenean scelerisque gravida mi sit amet gravida. Quisque urna justo, pharetra in tempor at, euismod ut risus.\n',
        price: 24.99,
        stockQuantity: 10
}
const ProductInfoComponent = ({productId}) => {
    const navigate = useNavigate()
    const[currentViewedProduct,setCurrentViewedProduct]=useState([])
    const user = useSelector((state) => state.user);
    const cartId = useSelector((state) => state.cartId.cartId);

    const [quantity, setQuantity] = useState();
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handleAddingToCart = () =>
    {
        console.log(user);
       if(user===null){
           navigate('/login')
       }
        fetch('/cart/addProductToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cartId:cartId,
                productId:productId,
                quantity: quantity
            })
        }).then(response=>{
            if(response.ok)
                alert("Product succesfully added to cart");
        }).catch(error =>  alert("Product succesfully added to cart"));
    }
    useEffect(()=>{
        setCurrentViewedProduct(mockedProduct);
    })
    useEffect(() => {
        fetch('/product/getCurrentViewedProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               productId:productId
            })
        })
            .then(response => response.json())
            .then(data => {
                setCurrentViewedProduct(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="product-info">
            <div className="product-details">
                <div className="imageContainer">
                    <img src={currentViewedProduct.imageUrl} alt={currentViewedProduct.name} />
                </div>
                <div className="otherProductInfoContainer">
                    <h1>{currentViewedProduct.name}</h1>
                    <p>{currentViewedProduct.price} dolarinjos</p>
                    <div className="buyingSection">
                        <input
                            type="number"
                            className="quantity-input"
                            min="1"
                            max={currentViewedProduct.stockQuantity}
                            onChange={handleQuantityChange}
                        />
                        <Button block={true} onClick={handleAddingToCart}>Add to cart</Button>
                    </div>
                    <img alt src={"https://cdncloudcart.com/23301/files/image/icons2-01.svg"}/>
                    <img alt src={"https://cdncloudcart.com/23301/files/image/icons2-02.svg"}/>

                </div>
            </div>
            <h2 style={{textAlign: 'left'}}>Description</h2>
            <p className="product-description">{currentViewedProduct.description}</p>
        </div>
    );
};

export default ProductInfoComponent;
