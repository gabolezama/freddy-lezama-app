import React from "react";
import juan from "../../assets/img/juan-valdez.jpg"
import ItemCount from "../ItemCount/ItemCount";

function Item(props){
    const {
        id,
        title,
        price,
        onAdd
    } = props

    return(
        <div className="card" style={{ margin: '10px', width: '18rem' }}>
            <img src={ juan } className="card-img-top" alt="juan-valdez"/>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="card-text">{ `ID del Producto ${id}` }</p>
                <p className="card-text">{`Precio: ${price}`}</p>
                <ItemCount key={1} myId={1} stock={0} initial={1} onAdd={(data)=> onAdd(data)}/>
            </div>
        </div>
    )
}

export default Item