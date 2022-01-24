import React, { useState, useContext, useEffect } from "react";
import CartWidget from "./CartWidget";
import '../NavBar/NavBarStyles.css';
import cafe from '../../assets/img/cafe.jpg'
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

function NavBar(){
    const [itemsQty, setItemQty ] = useState(0)
    const categorias = ['Cafe', 'Infusiones', 'Pasteleria'];
    
    const { cntProducto } = useContext( CartContext )
    
    useEffect(()=>{
        setItemQty( cntProducto )
    }, [cntProducto])
    
    return(
        <nav className='NavBar'>
            <h4 id='titleApp'><NavLink to={'/'}>Cultura Café</NavLink></h4>
            <img id='logoCafe' src={ cafe } alt="logo" />
            {
                categorias.map((categoria, index)=>{
                    return(
                        <div key={index} id={`${categorias[index]}`} className='link'>
                            <a><Link to={ `/${categoria}` }>{categoria}</Link></a>
                        </div>
                    )
                })
            }
            {cntProducto ? <CartWidget itemsQty={ itemsQty } />: <div></div>}
        </nav>
    )
}

export default NavBar;