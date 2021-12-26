import React, { useState } from "react";
import CartWidget from "./CartWidget";
import '../NavBar/NavBarStyles.css';
import cafe from '../../assets/img/cafe.jpg'
import { Link, NavLink } from "react-router-dom";

function NavBar(){
    const [itemsQty, setItemQty ] = useState(0)
    const categorias = ['Café', 'Infusiones', 'Pasteleria'];

    window.addEventListener('agregarItem', (evt)=>{
        console.log(evt);
    })
    
    return(
        <nav className='NavBar'>
            <h4 id='titleApp'><NavLink to={'/home'}>Cultura Café</NavLink></h4>
            <img id='logoCafe' src={ cafe } alt="logo" />
            {
                categorias.map((categoria, index)=>{
                    return(
                        <div key={index} id={`${categorias[index]}`} className='link'>
                            <a><Link to={`${categoria === 'Café' ? '/home' : categoria }`}>{categoria}</Link></a>
                        </div>
                    )
                })
            }
            <CartWidget itemsQty={ itemsQty } />
        </nav>
    )
}

export default NavBar;