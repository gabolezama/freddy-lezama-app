import React, { useState, useContext, useEffect } from "react";
import Item from "./Item";
import { CartContext } from "../CartContext/CartContext";

function ItemList() {

  const [catalogo, setCatalogo] = useState([]);

  const { setLoader, setArray, arrayCafe } = useContext(CartContext)

  setLoader(true)
  
  useEffect(()=>{
    setArray('cafe')
    setCatalogo(arrayCafe)
  }, [arrayCafe])

  console.log(catalogo);
  catalogo.length > 0 && setLoader(false)

  return (   
        <div className='row justify-content-center'>
        {
            Array.isArray(catalogo) && catalogo.length > 0 && catalogo.map((item, index) => {
            return (<Item key={index} id={item.productId} country={item.country} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} rating={item.rating}/>);
            })
        }
        </div>
  );
}

export default ItemList