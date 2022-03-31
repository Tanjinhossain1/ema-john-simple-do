import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, attToCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

   
    const handleAddToCart = (selectproduct) =>{
        let newCart = [];
       const exist = cart.find(product  => product.id === selectproduct.id);
       if(!exist){
           selectproduct.quantity = 1;
            newCart = [...cart, selectproduct]
       }else{
           const rest = cart.filter(product => product.id !== selectproduct.id);
           exist.quantity = exist.quantity + 1 ;
           newCart = [...rest, exist]
       }
        // do not do this: cart.push(product);
        // const newCart = [...cart, selectproduct];
        setCart(newCart);
        addToDb(selectproduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
               <Link className='review-order' to={'/orders'}><button>Review Order</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;