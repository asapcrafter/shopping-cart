import React, {useState} from 'react';
import products from './products';
import Item from './Item';

const Shop = () => {
    const [cart, setCart] = useState(0)

    // Array of product objects used for component creation
    const productArray = products();
    
    return (
        <div className='content'>
            <div className="shop-wrapper">
                <div className="shop-info-container">
                    <div className='shop-info-item'>Our Customer Favorites</div>
                    <div className='shop-info-item'>Build your custom routine with these products!</div>
                </div>
                <div className="shop-container">
                    {productArray.map(i => <Item {...i} key={i.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Shop;
