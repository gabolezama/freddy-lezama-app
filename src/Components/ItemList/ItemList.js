import React, { useState, useContext } from "react";
import Item from "./Item";
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../CartContext/CartContext";

function ItemList() {

  const [catalogo, setCatalogo] = useState([]);

  const { setLoader, arrayCafe } = useContext(CartContext)

  
  const task = new Promise((resolve) => {
    setLoader(true)
    setTimeout(() => {
        resolve( arrayCafe );
    }, 5000);
  });

  useEffect(()=>{
    task.then((res) => {
      setCatalogo(res);
      
    });
  }, [])

  console.log(catalogo);

  catalogo.length > 0 && setLoader(false)

  return (   
        <div className='row justify-content-center'>
        {
            catalogo.map((item, index) => {
            return (<Item key={index} id={item.id} country={item.country} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} rating={item.rating}/>);
            })
        }
        </div>
  );
}

export default ItemList