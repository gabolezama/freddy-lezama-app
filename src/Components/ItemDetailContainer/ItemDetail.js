import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(props) {
  const { id, bandera, name, region, rating } = props;
  const starNum = rating.split(',')

  const [ added, setAdded ] = useState(true)
  const evtAgregar = new CustomEvent('agregarItem',{bubbles: true})

  const onAdd = (id) =>{
    console.log('id', id)
    setAdded(false)
    window.dispatchEvent(evtAgregar)
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
        <p>Unidades Disponibles: {starNum[3]}</p>
        {
          added ? <ItemCount myId={id} initial={starNum[4]} stock={starNum[3]} onAdd={(id) => onAdd(id)}/>
          :       <span id="purchaseEndBadge" class="badge bg-secondary">Este producto ya se agregó al carrito</span>
        }
        <NavLink id="purchaseEnd" to={'/cart'}><button type="button" class="btn btn-success">Terminar mi Compra</button></NavLink>
      </div>
    </div>
  );
}

export default ItemDetail