import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="nav-wrapper">
                <div id="logo">
                    Glam Shop
                </div>
                <div className='nav-container'>
                    <div id="home-page">Home</div>
                    <div id="shop-page">Shop</div>
                    <div id="about-page">About</div>
                    <div id="cart-page">Shopping Cart</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
