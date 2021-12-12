import React from "react";
import CartWidget from "./CartWidget";
import '../NavBar/NavBarStyles.css';
import cafe from '../../assets/img/cafe.jpg'

function NavBar(props){
    const { itemsQty }=props;
    const categorias = ['Café', 'Infusiones', 'Pastelería', 'Tragos', 'Socios'];
    
    return(
        <nav className='NavBar'>
            <h4 id='titleApp'>Cultura Café</h4>
            <img id='logoCafe' src={ cafe } alt="logo" />
            {
                categorias.map((categoria, index)=>{
                    return(
                        <div key={index} id={`${categorias[index]}`} 
                             className='link'>
                            <a>{categorias[index] }</a>
                        </div>
                    )
                })
            }
            <CartWidget itemsQty={ itemsQty } />
        </nav>
    )
}

export default NavBar;