import React, {useState} from 'react';

const Item = (props) => {
    const [quantity, setQuantity] = useState(0)

    const incrementQuantity = () => setQuantity(quantity + 1)
    const decrementQuantity = () => setQuantity(quantity - 1)

    return (
        <div className="product">
            <div className="product-img">
                {props.image}
            </div>
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
                <div className="product-price">
                    {props.price}
                </div>
                <div className="quantity-container">
                    <div className="quant-minus">-</div>
                    <div className="quantity">{quantity}</div>
                    <div className="quant-add">+</div>
                    <div className="add-product">
                        Add to Bag
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
