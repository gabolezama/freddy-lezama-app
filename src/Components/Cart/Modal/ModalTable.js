import React, { useEffect, useState } from "react";

function ModalTable(props) {
const {cart, getPersonalData} = props;

const [ personalData, setPersonalData ] = useState({name: null, lastName: null, email: null})

const onChangeInput = ( value, id ) =>{
    setPersonalData({ 
            ...personalData,
            [id] : value
        })
}
useEffect(()=>{
    getPersonalData( personalData )
},[personalData])

  return (
    <div class="container">
      <div className="row">
        <div className="col">
            <h6>Datos Personales</h6>
            <p>Por favor ingrese sus datos para poder registrar su compra</p>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Nombre</label>
                    <input type="text" onChange={(evt)=> onChangeInput(evt.target.value, evt.target.id)} className="form-control" id="name"/>
                </div>
                <div className="mb-3">
                    <label for="lastName" className="form-label">Apellido</label>
                    <input type="text" onChange={(evt)=> onChangeInput(evt.target.value, evt.target.id)} className="form-control" id="lastName"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(evt)=> onChangeInput(evt.target.value, evt.target.id)} className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
            </form>
        </div>
        <div className="col">
            <h6>Resumen de la Compra</h6>
            {   
                cart.map((item)=>{

                    return(
                        <div className="row">
                            <div className="col">
                                <label className="form-label">{item.name} X</label>
                                <label className="form-label">{item.quantity}</label>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default ModalTable