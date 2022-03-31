import { useEffect, useState } from "react";
import { attToCart } from "../utilities/fakedb";

const useCart = products =>{
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const added = attToCart();
      
        let saveCart = [];
        for(const id in added){
         const card = products.find(product => product.id === id);        
         if(card){
             const quantity = added[id];
             card.quantity = quantity;
            saveCart.push(card)
         }
         setCart(saveCart)
        }
        
    },[products])
    return [cart, setCart]
}
export default useCart;