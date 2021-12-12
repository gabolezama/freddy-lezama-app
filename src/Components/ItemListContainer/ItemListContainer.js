import React, { useState } from "react";
import '../../AppStyles/App.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props){
    const { onAdd } = props;
    
    return(
        <>
           <ItemList onAdd={()=> onAdd()}/>
        </>
    )
}

export default ItemListContainer