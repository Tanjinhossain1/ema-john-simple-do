import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    // console.log(products)
    console.log(cart)
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
    
                setProducts(data)
            })
    }, [page, size]);
    useEffect(()=>{
        
    },[products])

    useEffect(() => {
        fetch('http://localhost:5000/pageCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])


    const handleAddToCart = (selectproduct) => {
        let newCart = [];
        const exist = cart.find(product => product._id === selectproduct._id);
        if (!exist) {
            selectproduct.quantity = 1;
            newCart = [...cart, selectproduct]
        } else {
            const rest = cart.filter(product => product._id !== selectproduct._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        // do not do this: cart.push(product);
        // const newCart = [...cart, selectproduct];
        setCart(newCart);
        addToDb(selectproduct._id)
    }

    return (
        <div className='shop-container'>
            <div>
                <div className="products-container">
                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'active' : ''}
                                onClick={() => setPage(number)}
                                key={number}
                            >{number}</button>)
                    }
                    <select style={{ marginLeft: '10px' }} onChange={(e) => setSize(e.target.value)} name="" id="">
                        <option value="15">10</option>
                        <option value="15">15</option>
                        <option value="15">20</option>
                        <option value="15">25</option>
                        <option value="15">30</option>
                    </select>
                </div>
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