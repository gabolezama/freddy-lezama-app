import React, { useContext } from 'react';
import { CartContext } from "../CartContext/CartContext";
import './NavBarStyles.css';

function CartWidget( props ){
    
   const { itemsQty } = props 

   const { clearAll }= useContext(CartContext)

   const resetCart = () =>{
        clearAll()
   }

    return(
        <div className='cartWidget'>
            <img id='imgCart' src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-shopping-cart-ecommerce-kiranshastry-solid-kiranshastry.png"/>
            <p className='contador'>{ itemsQty ?? '' }</p>
            <button type="button" class="btn btn-warning btn-reset" onClick={()=> resetCart()}>Resetear</button>
        </div>
    )
}

export default CartWidget