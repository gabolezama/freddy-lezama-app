import React, { createContext, useState, useEffect } from 'react';
export const CartContext = createContext();

export const ContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [cntProducto, setCntProducto] = useState(0);

    const addItem = (producto, quantity, set) => {
        if ( quantity !== 0 || quantity !== undefined ) {
            setCntProducto(cntProducto + quantity);
            const existe = cart.find(itemCart => itemCart.producto === producto);
            if (existe) {
                const updateCntProd = existe.quantity + quantity;
                existe.quantity = updateCntProd;
                setCart(cart);
            } else {
                setCart([...cart, { producto: producto, quantity: quantity, added: set }]);
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

    return (<CartContext.Provider value={{ cart, cntProducto, addItem, clearAll, deleteItem }}>
        {children}
    </CartContext.Provider>
    );
};