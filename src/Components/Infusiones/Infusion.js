import React from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Infusion(props) {
  const { id, country, title, price, stock, initial, img, rating, onAdd } = props;

  return (
    <div className="card">
      <img id='imgCard' src={img} className="card-img-top" alt="juan-valdez" />
      <NavLink className='itemNavLink' to={`/ItemDetail/${country}/${rating}`}><button type="button" class="btn btn-success"> Más Info </button></NavLink>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`ID del Producto ${id}`}</p>
        <p className="card-text">{`Precio: ${price} ---   Stock: ${stock}`}</p>
        <ItemCount key={id} myId={id} stock={stock} initial={initial} onAdd={(data) => onAdd(data)}/>
        { !stock && <p style={{ marginLeft: '1.5rem'}}> Disculpe! no tenemos stock </p>}
      </div>
    </div>
  );
}

export default Infusion;