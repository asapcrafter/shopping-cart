import React from 'react';

const Item = (props) => {
    const image = props.image
    const name = props.name

    return (
        <div className="product">
            {name}
        </div>
    );
}

export default Item;
