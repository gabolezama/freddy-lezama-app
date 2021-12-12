import '../ItemCount/ItemCountStyle.css'
import carritoMas from '../../assets/img/anadir-al-carrito.png'
import { useState } from 'react'

function ItemCount(props) {

  const { myId,
          stock,
          initial,
          onAdd} = props;
  
  const [ counter, setCounter ] = useState(initial === undefined || initial === null? 0 : initial)

  const increase = ()=>{
    setCounter( counter >= stock? stock : counter + 1 )
  }
  const decrease = ()=>{
    setCounter( counter <= 0 ? 0 : counter-1)
  }

  return (
    <div className="ItemCount">
        <div className="col counter">
          <input type="text" className="form-control" value={counter} />
          <div className="row">
            <button
              type="button"
              className="col mt-1 btn btn-outline-primary button-mas"
              onClick={() => increase()}
            >
              +
            </button>
            <button
              type="button"
              className="col mt-1 btn btn-outline-danger button-menos"
              onClick={() => decrease()}
            >
              -
            </button>
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            disabled={!stock}
            className="col btn btn-success btn-verde"
            onClick={() => onAdd(myId)}
          >
            Agregar
            <img className="carritoMas" src={carritoMas}></img>
          </button>
        </div>
    </div>
  );
}

export default ItemCount