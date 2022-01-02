import React, {useContext} from "react";
import "./Cart.css"
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

function Cart(){

    const {cart, deleteItem} = useContext(CartContext)
    let acumulative = 0

    const unDoAdd = (id) =>{ deleteItem(parseInt(id)) }
    return(
        <div>
            {
                cart.length > 0 ?
                    cart.map((element, index) => {
                        acumulative += element.quantity

                        return (
                            
                                <div class="listContainer">
                                    <div class="row addedItem" style={{ backgroundColor: index % 2 === 0 ? 'lightseagreen' : 'lightgreen' }}>
                                        <img class="listImg" src={`${element.img}`} />
                                        <div class="name">{element.name}</div>
                                        <div class="qty">{element.quantity}</div>
                                        <button type="button" class="btn btn-danger" onClick={()=> unDoAdd(element.producto) }>Deshacer Agregar</button>
                                    </div>
                                </div>
                            
                        )
                    })
                    :
                    <h1 className="failMessage"><NavLink className={'failNav'} to={'/'}>No hay Elementos Agregados al Carrito, Haga click acá para ir a Home</NavLink></h1>
            }
            {
                cart.length > 0 &&
                <div class="listContainer">
                    <div class="addedItem">
                        <div class="listImg">Total Acumulado: </div>
                        <div class="name"></div>
                        <div class="acum">{acumulative}</div>
                    </div> 
                </div>
            }
        </div>
    )

}

export default Cart