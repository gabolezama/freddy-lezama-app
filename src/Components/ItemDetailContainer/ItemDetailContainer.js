import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../ItemDetailContainer/ItemDetailContainer.css'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const { country, id, rating, price } = useParams();

    const [ countryData, setCountryData] = useState([])

    const getCountryInfo = async() =>{
        const getInfo = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        const info = await getInfo.json()
        return info
    }

    useEffect(()=>{
       getCountryInfo().then(res => setCountryData(res[0]))
    }, [])

    return(
        <div className='detailContainer'>
          <ItemDetail id={id} bandera={ countryData?.flags?.png } region={ countryData?.subregion } name={country} rating={rating} price={price} />
        </div>
    )
}

export default ItemDetailContainer