import React, { createContext, useState, useEffect } from 'react';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"

export const CartContext = createContext();

export const ContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cntProducto, setCntProducto] = useState(0);

    const [arrayCafe, setArrayCafe] = useState([]) 
    const [arrayInfusion, setArrayInfusion] = useState([]) 
    const [tag, setTag] = useState(null) 

    useEffect(()=>{
      const db = getFirestore();
      if (tag === "cafe") {
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
          setArrayCafe(snapshot.docs.map((doc) => ({ ...doc.data() })));
        });
      }else{
        const infusionesCollection = collection(db, 'infusiones')
        getDocs( infusionesCollection ).then((snapshot) => {
            setArrayInfusion(snapshot.docs.map((doc)=> ({ ...doc.data()} )));
        }) 
      }

    }, [tag])

  const addItem = (producto, quantity, set) => {

      if (quantity !== 0 || quantity !== undefined) {
        setCntProducto(cntProducto + quantity);
        const existe = cart.find((itemCart) => itemCart.producto === producto);

        if (existe) {
          const updateCntProd = existe.quantity + quantity;
          existe.quantity = updateCntProd;
          setCart(cart);

        } else {
          let name, foto;

            name = arrayCafe.find((elm) => elm.productId === producto)?.title;
            foto = arrayCafe.find((elm) => elm.productId === producto)?.img;

          if(name === undefined || foto === undefined ) {
            name = arrayInfusion.find((elm) => elm.productId === producto)?.title;
            foto = arrayInfusion.find((elm) => elm.productId === producto)?.img;
          }

          setCart([
            ...cart,
            {
              producto: producto,
              name: name,
              img: foto,
              quantity: quantity,
              added: set,
            },
          ]);
        }
      }
    };

    const deleteItem = (id) => {
        console.log(id, cart);

        const eliminado = cart.find((item)=> item.producto === id )

        const quitoItem = cart.filter((element) => element.producto !== id);

        setCntProducto( cart.length === 0 ? 0 : cntProducto - (eliminado?.quantity?? 0))
        setCart(quitoItem);
    };

    const clearAll = () =>{ setCart([]); setCntProducto(0)}
    console.log(cart);

    const setLoader = (setting) =>{ setLoading(setting); }

    const setArray = (tag) =>{ setTag(tag) }

    return (
      <CartContext.Provider
        value={{
          cart,
          cntProducto,
          loading,
          arrayCafe,
          arrayInfusion,
          addItem,
          clearAll,
          deleteItem,
          setLoader,
          setArray,
        }}
      >
        {children}
      </CartContext.Provider>
    );
};