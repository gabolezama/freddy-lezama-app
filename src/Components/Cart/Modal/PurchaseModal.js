import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import ModalTable from "./ModalTable";

function PurchaseModal(props){
    const { showModal, totalPrice } = props
    const {cart, generatePurchase} = useContext(CartContext)
    const [ data, setData ] = useState({})

    const getPersonalData = (data) =>{
        setData(data)
    }
    const generateOrder = () =>{
        const emptyField = Object.values( data ).find((value)=>{
            return ( value === null || value.trim() === '' ) 
        })
        
        if(emptyField === undefined){
            generatePurchase( data, totalPrice )
        }else{
            alert('No ha llenado todos los datos necesarios!!')
        }
    }

    return(
        <div className="modalContainer">
            <div className="purchaseModal">
                <ModalTable cart={cart} getPersonalData={(data)=> getPersonalData(data)}/>
                <div className="row">
                    <div className="col modalButtons">
                        <button type="button" className="btn btn-danger cancelar" onClick={()=> showModal(false) }>Cancelar</button>
                        <button type="button" className="btn btn-success" onClick={()=> generateOrder() }>Aceptar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseModal