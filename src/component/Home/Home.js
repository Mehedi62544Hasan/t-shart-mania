import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const tsharts = useLoaderData();

        const [cart, setCart] = useState([]);

    const addToCart = (tshart) =>{
         const choiceCart = cart.find(ts => ts._id === tshart._id)
        if(choiceCart){
            alert('Cart is already acciss')
        }
        else{
            const addCart = [...cart, tshart];
            setCart(addCart)
        }
    }

    const removeToCart = (tshart) =>{
        const removeCart = cart.filter(ts => ts._id !== tshart._id)
        setCart(removeCart)
    }
     return (
        <div className='home-container'>
            <div className='product-container'>
                {
                    tsharts.map(tshart => <Product
                        key={tshart._id}
                        tshart={tshart}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div>
                <h2>This is Order pages</h2>
            {
               cart.map(tshart => <Cart
                    key={tshart._id}
                    tshart={tshart}
                    removeToCart={removeToCart}
               ></Cart> )
            }
               
            </div>
         </div>
    );
};

export default Home;