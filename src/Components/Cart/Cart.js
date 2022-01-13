import React, {useContext, useEffect, useState } from "react";
import "./Cart.css"
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";
import PurchaseModal from "./Modal/PurchaseModal";

function Cart(){

    const {cart, deleteItem} = useContext(CartContext)

    const [ acumulativePrice, setAcumulativePrice ] = useState(0)
    const [ showModal, setShowModal ] = useState(false)

    let acumulative = 0, totalPrice = 0;

    const unDoAdd = (id) =>{ deleteItem(parseInt(id)) }

    const onChangeOpenModal = (change) =>{ setShowModal(change) }

    useEffect(()=>{
        if(cart.length >= 1){
            
            cart.forEach((item)=>{
                totalPrice += (item.price * item.quantity)
            })
        }
        setAcumulativePrice(totalPrice);
    }, [cart])

    return(
        <div>
            {false &&
                    <div class="listContainer">
                        <div class="addedItem">
                            <div class="listImg">Imagen de Ref</div>
                            <div class="name">Nombre Prod</div>
                            <div class="acum">Cantidad</div>
                            <div class="qty">Precio</div>
                            <div class="qty">Acciones</div>
                        </div>
                    </div>
            }
            {
                cart.length > 0 ?
                    cart.map((element, index) => {
                        acumulative += parseInt(element.quantity)

                        return (
                            
                                <div class="listContainer">
                                    <div class="addedItem" style={{ backgroundColor: index % 2 === 0 ? 'lightseagreen' : 'lightgreen' }}>
                                        <img class="listImg" src={`${element.img}`} />
                                        <div class="name">{element.name}</div>
                                        <div class="qty">{element.quantity}</div>
                                        <div class="qty">{element.price}</div>
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
                        <div class="qty">{acumulativePrice}</div>
                    <NavLink id="purchaseEnd" to={'/cart'}><button type="button" className="btn btn-success" onClick={()=>onChangeOpenModal(true)}>Terminar mi Compra</button></NavLink>
                    </div> 
                </div>
            }
            {
                showModal && <PurchaseModal showModal={ (change) => onChangeOpenModal(change) }/>
            }
        </div>
    )

}

export default Cart