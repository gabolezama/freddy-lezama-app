import React, {useContext, useEffect} from "react";
import { useState } from "react";
import Infusion from "./Infusion";
import { CartContext } from "../CartContext/CartContext";

function Infusiones (){

const [catalogoInfusiones, setCatalogoInfusiones ] = useState([])

const { setLoader, setArray, arrayInfusion } = useContext(CartContext)

  setLoader(true)
  
  useEffect(()=>{
    setArray('infusiones')
    setCatalogoInfusiones(arrayInfusion)
  },[arrayInfusion])

  console.log(catalogoInfusiones);

  catalogoInfusiones.length > 0 && setLoader(false)

  return (   
        <div className='row justify-content-center'>
        {
            catalogoInfusiones.map((item, index) => {
            return (<Infusion key={index} id={item.productId} country={item.country} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} rating={item.rating}/>);
            })
        }
        </div>
  );
}
export default Infusiones