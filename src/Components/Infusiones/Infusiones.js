import React, {useContext, useEffect} from "react";
import { useState } from "react";
import Infusion from "./Infusion";
import { CartContext } from "../CartContext/CartContext";

function Infusiones (){

const [catalogoInfusiones, setCatalogoInfusiones ] = useState([])

const { arrayInfusion, setLoader } = useContext(CartContext)


const task = new Promise((resolve) => {
  setLoader(true)
    setTimeout(() => {
        resolve( arrayInfusion );
    }, 5000);
  });

  useEffect(()=>{
    task.then((res) => {
      setCatalogoInfusiones(res);
    });
  },[])

  console.log(catalogoInfusiones);

  catalogoInfusiones.length > 0 && setLoader(false)

  return (   
        <div className='row justify-content-center'>
        {
            catalogoInfusiones.map((item, index) => {
            return (<Infusion key={index} id={item.id} country={item.country} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} rating={item.rating}/>);
            })
        }
        </div>
  );
}
export default Infusiones