import React, {useContext, useEffect} from "react";
import { useState } from "react";
import Infusion from "./Infusion";
import { CartContext } from "../CartContext/CartContext";
import { collection, getDocs, getFirestore } from "firebase/firestore"

function Infusiones (){

const [catalogoInfusiones, setCatalogoInfusiones ] = useState([])
const [items, setItems] = useState([])
const [reload, setReload] = useState(false)

const { setLoader, setArrayInfusion } = useContext(CartContext)

  setLoader(true)
  
  useEffect(()=>{
    const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data() })));
      });

      setCatalogoInfusiones(items.filter((item)=>{
          return item.type === 'mate'
        }));
  },[reload])

  console.log(catalogoInfusiones);
  if(catalogoInfusiones.length > 0){
    setArrayInfusion(catalogoInfusiones)
    setLoader(false)
  }
  else  setTimeout(()=>{
        setReload(!reload)
  },1000)

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