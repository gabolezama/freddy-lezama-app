import React, { useContext, useState, useEffect } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../CartContext/CartContext";

function ItemDetail(props) {
  const { id, bandera, name, region, rating, price } = props;
  const starNum = rating.split(',')

  const [ added, setAdded ] = useState(true)
  const [ newStock, setNewStock ] = useState( starNum[3] )

  const { cart, addItem }= useContext(CartContext)

  const evtAgregar = new CustomEvent('agregarItem',{bubbles: true})

  useEffect(()=>{

    const showAdded = cart.find((item)=>{
      return item.producto === parseInt(id)
    })

    setAdded(showAdded === undefined ? true : showAdded.added)
  }, [ cart ])

  const onAdd = (id, qty) =>{ 
    setNewStock( starNum[3] - parseInt(qty))
    let stock = starNum[3] - parseInt(qty)
    qty !== 0 && addItem( parseInt(id), parseInt(qty), stock, parseInt(price), false ) 
  }

  return (
    <div className="row">
      <div className="col">
        <h1>{`Detalles para ${name}`}</h1>
        <img id="banderaDetail" src={bandera} />
      </div>
      <div className="col">
        <h1>Descripción del producto</h1>
        <div className="row productDescription">
          <div className="col">
            <p style={{ width: "3rem" }}>Ubicación: {region}</p>
            <p>
              Cuerpo:
              <div className="star-rating">
                {[...Array(parseInt(starNum[0]))].map(() => {
                  return <span className="star">&#9733;</span>;
                })}
              </div>
            </p>
            <p>
              Amargo:
              <div className="star-rating">
                {[...Array(parseInt(starNum[1]))].map(() => {
                  return <span className="star">&#9733;</span>;
                })}
              </div>
            </p>
            <p>
              Acido:
              <div className="star-rating">
                {[...Array(parseInt(starNum[2]))].map(() => {
                  return <span className="star">&#9733;</span>;
                })}
              </div>
            </p>
          </div>
          <div className="col">
            <p id="description">
              Esta es un breve parrafo descriptivo del producto Que incluye
              características propias de cada país de origen Descripciones de
              costumbres sobre la babida y cultura propia
            </p>
          </div>
        </div>
      </div>
      <div className="col purchaseControl">
        <h1>Controles de Compra:</h1>
        <p>Cantidad Inicial: {starNum[4]}</p>
        <p>Unidades Disponibles: {newStock}</p>
        {
          added === undefined || added === true ? 
          <ItemCount myId={id} initial={starNum[4]} stock={starNum[3]} onAdd={(id, qty, stock) => onAdd(id, qty)}/>
          :
          <span id="purchaseEndBadge" className="badge bg-secondary">Este producto ya se agregó al carrito</span>
        }
      </div>
    </div>
  );
}

export default ItemDetail