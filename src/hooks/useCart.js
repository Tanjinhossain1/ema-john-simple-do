import { useEffect, useState } from "react";
import { attToCart } from "../utilities/fakedb";

const useCart = () =>{
    const [cart, setCart] = useState([])
    useEffect(()=>{

        const added = attToCart();
        let saveCart = [];
        const keys = Object.keys(added)
        console.log(keys)
        fetch(`http://localhost:5000/productByKeys`,{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products => {
            for(const id in added){
                 const card = products.find(product => product._id === id);        
                 if(card){
                     const quantity = added[id];
                     card.quantity = quantity;
                    saveCart.push(card)
                 }
                 setCart(saveCart)
                }
        })
        
        //
        
    },[])
    return [cart, setCart]
}
export default useCart;