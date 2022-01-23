import React, { createContext, useState, useEffect } from 'react';
import { addDoc, collection, getDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore"

export const CartContext = createContext();

export const ContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cntProducto, setCntProducto] = useState(0);
    const [purchaseOrder, setPurchaseOrder] = useState({})
    const [orderId, setOrderId] = useState()

    const [arrayCafe, setArrayCafe] = useState([]) 
    const [arrayInfusion, setArrayInfusion] = useState([])

    useEffect(()=>{
      
      Object.values(purchaseOrder).length > 0 && finalizePurchase()
    }, [purchaseOrder])
    
    function finalizePurchase(){
      console.log(purchaseOrder);
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders')
      addDoc( ordersCollection, purchaseOrder).then(({ id }) => setOrderId(id))
      
      alert(`Su compra se generó con exito!!, el ID de su compra es: ${orderId}`)

      updateStock(purchaseOrder)
      setPurchaseOrder({})
      clearAll()
  }

  function docDictionary(name){
    let docName = ''
    const nameSplitted = name.split(' ')

    switch(nameSplitted[1]){
      case 'Brasileno':
        docName = 'Brasil';
        break;
      case 'Brasileño':
        docName = 'Brazil';
        break;
      case 'Colombiano':
        docName = 'Colombia';
        break;
      case 'Uruguayo':
        docName = 'Uruguay';
        break;
      case 'Paraguayo':
        docName = 'Paraguay';
        break;
      case 'Frances':
        docName = 'Francia';
        break;
      case 'Peruano':
        docName = 'Peru';
        break;
      case 'Mexicano':
        docName = 'Mexico';
        break;
      case 'Venezolano':
        docName = 'Venezuela';
        break;
      case 'Argentino':
        docName = 'Argentina';
        break;
    }
    return docName
  }

  function updateStock(purchaseOrder){
    const db = getFirestore()
    const itemsCollection = collection(db, "items")
    
    purchaseOrder.items.map((item)=>{
       updateDoc(doc(itemsCollection, docDictionary(item.name)),{ stock: item.stock })
    })
  }
  
  const addItem = (producto, quantity, stock, price, set) => {

      if (quantity !== 0 || quantity !== undefined) {
        setCntProducto(cntProducto + quantity);
        const existe = cart.find((itemCart) => itemCart.producto === producto);

        if (existe) {
          existe.quantity += quantity;          
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
              stock: stock,
              price: price,
              added: set
            },
          ]);
        }
      }
      console.log('Cart: ', cart);
    };

    const deleteItem = (id) => {
        console.log('Elimino: ', id);

        const eliminado = cart.find((item)=> item.producto === id )

        const quitoItem = cart.filter((element) => element.producto !== id);

        setCntProducto( cart.length === 0 ? 0 : cntProducto - (eliminado?.quantity?? 0))
        setCart(quitoItem);
    };

    const generatePurchase = ( personalData, totalPrice ) =>{
      setPurchaseOrder({
        buyer:{
          ...personalData
        },
        items: cart,
        total: totalPrice
      })
      
    }

    const clearAll = () =>{ setCart([]); setCntProducto(0)}

    const setLoader = (setting) =>{ setLoading(setting); }

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
          setArrayCafe,
          setArrayInfusion,
          generatePurchase
        }}
      >
        {children}
      </CartContext.Provider>
    );
};