import React, { useState } from "react";
import '../../AppStyles/App.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props){
    const { onAdd } = props;
    
    return(
        <>
           <ItemList/>
           <ItemCount key={1} myId={1} stock={0} initial={1} onAdd={(data)=> onAdd(data)}/>
           <ItemCount key={2} myId={2} stock={8} initial={2} onAdd={(data)=> onAdd(data)}/>
           <ItemCount key={3} myId={3} stock={0} initial={5} onAdd={(data)=> onAdd(data)}/>
        </>
    )
}

export default ItemListContainer