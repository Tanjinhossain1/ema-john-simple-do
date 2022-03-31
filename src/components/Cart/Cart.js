import React from 'react';
import './Cart.css'
const Cart = ({cart, children}) => {
    let totalPrice = 0;
    let quantity = 0;
    let shipping = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(3));
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
                <h4>Order Summary</h4>
                <div className='pera-contain'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal}</h5>
                {children}
                </div>
        </div>
    );
};

export default Cart;