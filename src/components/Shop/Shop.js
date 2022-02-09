import React from 'react';

import { useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import fD from './../../fD/';
import Card from './../Card/Card';



const Shop = () => {
    const first10 = fD.slice(0, 15);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
    
        <div className='s-c'>
            <div className="product-container">
                <h3>{products.length}</h3>
                <ul>
                    {
                        products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
                    }

                </ul>
            </div>
            <div className='cart-container'>
               <Card cart={cart} />
            </div>    

        </div>
    );
};

export default Shop;