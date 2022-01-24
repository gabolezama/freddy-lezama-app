import React, { useState, useContext, useEffect } from "react";
import Item from "./Item";
import { CartContext } from "../CartContext/CartContext";
import { collection, getDocs, getFirestore } from "firebase/firestore"

function ItemList( props ) {
  const { category } = props

  const [catalogo, setCatalogo] = useState([]);
  const [items, setItems] = useState([])
  const [reload, setReload] = useState(false)

  const { setLoader, setArrayCafe, setArrayInfusion, setArrayPastel, setCategory } = useContext(CartContext)

  setLoader(true)
 
  useEffect(()=>{
    setCategory( category )
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ ...doc.data() })));
      });

      setCatalogo(items.filter((item)=>{
          return category === 'Cafe' || category === undefined ? item.type === 'cafe' : category === 'Infusiones' ? item.type === 'mate' : item.type === 'pastel'
      }));
  }, [reload, category])

  console.log(catalogo);
  if(catalogo.length > 0){
    category === 'Cafe' || category === undefined ? setArrayCafe(catalogo) : category === 'Infusiones' ? setArrayInfusion(catalogo) : setArrayPastel(catalogo)
    setLoader(false)
  }
  else  setTimeout(()=>{
        setReload(!reload)
  },500)

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