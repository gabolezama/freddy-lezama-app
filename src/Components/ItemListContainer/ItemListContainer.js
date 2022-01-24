import React from "react";
import { useParams } from "react-router";
import '../../AppStyles/App.css';
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props){
    const { categoria } = useParams();

    return(
        <>
           <ItemList category={ categoria }/>
        </>
    )
}

export default ItemListContainer