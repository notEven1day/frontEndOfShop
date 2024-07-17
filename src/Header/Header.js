import React, {Component} from 'react';
import './Header.css';

const Header = () =>{
    return (
        <header className='Header'>
            <nav className='Navbar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>

            );
}
export default Header;