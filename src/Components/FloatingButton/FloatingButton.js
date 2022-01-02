import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import taza from '../../assets/img/coffee.png'
import { CartContext } from "../CartContext/CartContext";

function FloatingButton(){
    const {loading} = useContext(CartContext)

    return ( !loading &&
      <NavLink className={'floatButton'} to={'/cart'}>
        <img className="taza" src={taza}></img> <br/>
        <button type="button" class="btn btn-warning">Ver Carrito</button>
      </NavLink>
    );
}

export default FloatingButton