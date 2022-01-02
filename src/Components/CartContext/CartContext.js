import React, { createContext, useState } from 'react';
import brasilero from "../../assets/img/cafe-brasil.jpg";
import peruano from "../../assets/img/cafe-peruano.jpg";
import venezolano from "../../assets/img/cafe-fama-de-america.jpg";
import colombiano from "../../assets/img/juan-valdez.jpg";
import mexicano from "../../assets/img/cafe-mexicano.jpg";
import frances from "../../assets/img/cafe-frances.jpg";
import mbrasil from "../../assets/img/mate-brasil.jpg";
import muruguay from "../../assets/img/mate-uruguay.jpg";
import argentino from "../../assets/img/taragui.jpg";
import paraguayo from "../../assets/img/kurupi.jpg";

export const CartContext = createContext();

export const ContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cntProducto, setCntProducto] = useState(0);

    const [arrayCafe, setArrayCafe] = useState([
        { id: 1, country: 'colombia' , title: "Café Colombiano", price: 1000, img: colombiano, stock: 5, initial: 1, rating: [5,5,5] },
        { id: 2, country: 'brazil', title: "Café Brasileño", price: 500, img: brasilero, stock: 0, initial: 3, rating: [3,2,4] },
        { id: 3, country: 'peru', title: "Café Peruano", price: 800, img: peruano, stock: 8, initial: 2, rating: [4,4,3] },
        { id: 4, country: 'venezuela', title: "Café Venezolano", price: 300, img: venezolano, stock: 0, initial: 5, rating: [5,4,4]},
        { id: 5, country: 'mexico', title: "Café Mexicano", price: 500, img: mexicano, stock: 4, initial: 1, rating: [3,2,2]},
        { id: 6, country: 'france', title: "Café Francés", price: 900, img: frances, stock: 9, initial: 2, rating: [4,4,4]}
        ])
    
    const [arrayInfusion, setArrayInfusion] = useState([
        { id: 7, country: 'argentina' , title: "Mate Argentino", price: 1000, img: argentino, stock: 5, initial: 1, rating: [5,5,5] },
        { id: 8, country: 'brazil', title: "Mate Brasileño", price: 500, img: mbrasil, stock: 0, initial: 3, rating: [3,5,2] },
        { id: 9, country: 'uruguay', title: "Mate Uruguayo", price: 800, img: muruguay, stock: 8, initial: 2, rating: [4,3,1] },
        { id: 10, country: 'paraguay', title: "Mate Paraguayo", price: 300, img: paraguayo, stock: 0, initial: 5, rating: [2,4,3]},
      ])

    const addItem = (producto, quantity, set) => {
        if ( quantity !== 0 || quantity !== undefined ) {
            setCntProducto(cntProducto + quantity);
            const existe = cart.find(itemCart => itemCart.producto === producto);
            if (existe) {
                const updateCntProd = existe.quantity + quantity;
                existe.quantity = updateCntProd;
                setCart(cart);
            } else {
                let name = arrayCafe.find((elm)=> elm.id === producto)?.title;
                let foto = arrayCafe.find((elm)=> elm.id === producto)?.img;
                if(!name || !foto){
                    name = arrayInfusion.find((elm)=> elm.id === producto)?.title;
                    foto = arrayInfusion.find((elm)=> elm.id === producto)?.img;
                }

                setCart([...cart,
                    { producto: producto,
                      name: name,
                      img: foto,
                      quantity: quantity,
                      added: set }
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
        }}
      >
        {children}
      </CartContext.Provider>
    );
};