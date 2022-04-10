import React, { useCallback, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import './Order.css'
import { TrashIcon } from '@heroicons/react/solid'
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    const removeCartItem = (product) =>{
        const restItem = cart.filter(pd => product.id !== pd.id);
        setCart(restItem)
        removeFromDb(product.id)
    }
    
    return (
        <div className='shop-container'>

            <div className='orders-container'>
                {
                    cart.map(product => <ShowAddProduct removeCartItem={removeCartItem} product={product} key={product.id}></ShowAddProduct>)
                }
                
            </div>
            <div>
                <div className="cart-container ok">
                    <Cart cart={cart}>
                       <Link to={'/shipping'}>
                           <button className='review-orders'>Proceed Shipping</button>
                       </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

const ShowAddProduct = ({ product, removeCartItem }) => {
    const { name, quantity, shipping, price, img } = product
    return (
        <div className='order-container '>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='child-container'>
                <div className='detail'>
                    <h1 title={name}> Name: {name.length > 20 ? name.slice(0, 20) + '...' : name}</h1>
                    <p>Price: <span>${price}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                </div>
                <div>
                    <button onClick={()=>removeCartItem(product)}><TrashIcon /></button>
                </div>
            </div>

        </div>
    )
}
export default Order;