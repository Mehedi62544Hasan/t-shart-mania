import React from 'react';
import './Product.css'

const Product = ({tshart, addToCart}) => {
    const {picture, name, price} = tshart;
    return (
    <div className='product'>
        <img src={picture}></img>
        <div>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => addToCart(tshart)}>Add to Cart</button>
         </div>
    </div>
    );
};

export default Product;