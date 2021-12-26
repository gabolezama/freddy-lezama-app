import React from "react";
import { NavLink } from "react-router-dom";

function Item(props) {
  const { id, country, title, price, stock, initial, img, rating} = props;
  
  rating.length <= 4 && rating.push(stock)
  rating.length <= 4 && rating.push(initial)

  return (
    <div className="card">
      <img id='imgCard' src={img} className="card-img-top" alt="juan-valdez" />
      <NavLink className='itemNavLink' to={ stock === 0 ? '/home' : `/ItemDetail/${country}/${id}/${rating}`}><button type="button" className={stock !== 0 ? "btn btn-success" : "btn btn-secondary"}> Más Info </button></NavLink>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`ID del Producto ${id}`}</p>
        <p className="card-text">{`Precio: ${price} ---   Stock: ${stock}`}</p>
        { !stock && <p> Disculpe! no tenemos stock </p>}
      </div>
    </div>
  );
}

export default Item;
