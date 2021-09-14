import React, {useState} from 'react';

const Item = (props) => {
    const [quantity, setQuantity] = useState(0)

    const incrementQuantity = () => setQuantity(parseInt(quantity) + 1)
    const decrementQuantity = () => setQuantity(quantity - 1)

    const handleChange = e => {
        setQuantity(e.target.value)
    }
    
    return (
        <div className="product">
            <img src={props.image} alt="" className="product-img" />
            <div className="product-container">
                <div className="product-brand">
                    {props.brand}
                </div>
                <div className="product-name">
                    {props.name}
                </div>
                <div className="product-description">
                    {props.description}
                </div>
                <div className="quantity-container">
                    <div className="product-price">${props.price}</div>
                    <div className="quant-minus" onClick={decrementQuantity}>-</div>
                    <input type="number" name="" className='quant-input' value={quantity} onChange={handleChange} min='0' />
                    <div className="quant-add" onClick={incrementQuantity}>+</div>
                    <div className="add-product">Add to Bag</div>
                </div>
            </div>
        </div>
    );
}

export default Item;
