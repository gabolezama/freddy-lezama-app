import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item(props) {
  const { id, title, price, stock, initial, img, onAdd } = props;

  return (
    <div className="card">
      <img id='imgCard' src={img} className="card-img-top" alt="juan-valdez" />
      <button type="button" class="btn btn-success">Más Info</button>

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

export default Item;
