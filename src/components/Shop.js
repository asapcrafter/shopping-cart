import React, {useState} from 'react';
import products from './products';
import Item from './Item';

const Shop = () => {
    const [cart, setCart] = useState(0)

    // Array of product objects is used for component creation
    const productArray = products();
    
    return (
        <div className='content'>
            SHOP PAGE
            <div className="shop-wrapper">
                <div className="shop-container">
                    {productArray.map(i => <Item {...i} key={i.id} />)}
                </div>
            </div>
        </div>
    );
}

export default Shop;
