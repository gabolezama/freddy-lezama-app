import React, {useContext, useEffect} from "react";
import { useState } from "react";
import mbrasil from "../../assets/img/mate-brasil.jpg";
import muruguay from "../../assets/img/mate-uruguay.jpg";
import argentino from "../../assets/img/taragui.jpg";
import paraguayo from "../../assets/img/kurupi.jpg";
import Infusion from "./Infusion";
import { CartContext } from "../CartContext/CartContext";

function Infusiones (){

const [catalogoInfusiones, setCatalogoInfusiones ] = useState([])

const { setLoader } = useContext(CartContext)


const task = new Promise((resolve) => {
  setLoader(true)
    setTimeout(() => {
        resolve([
          { id: 7, country: 'argentina' , title: "Mate Argentino", price: 1000, img: argentino, stock: 5, initial: 1, rating: [5,5,5] },
          { id: 8, country: 'brazil', title: "Mate Brasileño", price: 500, img: mbrasil, stock: 0, initial: 3, rating: [3,5,2] },
          { id: 9, country: 'uruguay', title: "Mate Uruguayo", price: 800, img: muruguay, stock: 8, initial: 2, rating: [4,3,1] },
          { id: 10, country: 'paraguay', title: "Mate Paraguayo", price: 300, img: paraguayo, stock: 0, initial: 5, rating: [2,4,3]},
        ]);
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