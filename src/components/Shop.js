import React from 'react';
import products from './products';
import Item from './Item';

const Shop = () => {
    const productArray = products();
    
    // const renderProducts = () => {
    //     return productArray.map(i => <Item {...i} key={i.id} />)
    // };

    // const productComponent = renderProducts();

    return (
        <div className='content'>
            SHOP PAGE
            {productArray.map(i => <Item {...i} key={i.id}/>)}
        </div>
    );
}

export default Shop;
