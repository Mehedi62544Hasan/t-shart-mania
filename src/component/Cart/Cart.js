import React from 'react';

const Cart = ({tshart, removeToCart}) => {
    const { name } = tshart
     return (
        <div>
            <p>
                {name}
                 <button onClick={() => removeToCart(tshart)}>X</button>
            </p>
         </div>
    );
};

export default Cart;
