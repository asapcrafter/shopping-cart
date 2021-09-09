import React from 'react';
import {useHistory} from 'react-router-dom';

const Header = () => {

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
    }

    return (
        <div className="header">
            <div className="nav-wrapper">
                <div id="logo">
                    PEKOE BEAUTY
                </div>
                <div className='nav-container'>
                    <div className="nav-item" id="home-page" onClick={() => handleClick('/shopping-cart/')}>HOME</div>
                    <div className="nav-item" id="shop-page" onClick={() => handleClick('/shopping-cart/shop')}>SHOP ALL</div>
                    <div className="nav-item" id="about-page" onClick={() => handleClick('/shopping-cart/about')}>ABOUT</div>
                    <div className="nav-item" id="cart-page" onClick={() => handleClick('/shopping-cart/cart')}>CART</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
