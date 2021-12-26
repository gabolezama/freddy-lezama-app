import React, { useState } from "react";
import Item from "./Item";
import brasilero from "../../assets/img/cafe-brasil.jpg";
import peruano from "../../assets/img/cafe-peruano.jpg";
import venezolano from "../../assets/img/cafe-fama-de-america.jpg";
import colombiano from "../../assets/img/juan-valdez.jpg";
import mexicano from "../../assets/img/cafe-mexicano.jpg";
import frances from "../../assets/img/cafe-frances.jpg";
import { useEffect } from "react/cjs/react.development";

function ItemList(props) {

  const [catalogo, setCatalogo] = useState([]);

  const task = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
          { id: 1, country: 'colombia' , title: "Café Colombiano", price: 1000, img: colombiano, stock: 5, initial: 1, rating: [5,5,5] },
          { id: 2, country: 'brazil', title: "Café Brasileño", price: 500, img: brasilero, stock: 0, initial: 3, rating: [3,2,4] },
          { id: 3, country: 'peru', title: "Café Peruano", price: 800, img: peruano, stock: 8, initial: 2, rating: [4,4,3] },
          { id: 4, country: 'venezuela', title: "Café Venezolano", price: 300, img: venezolano, stock: 0, initial: 5, rating: [5,4,4]},
          { id: 5, country: 'mexico', title: "Café Mexicano", price: 500, img: mexicano, stock: 4, initial: 1, rating: [3,2,2]},
          { id: 6, country: 'france', title: "Café Francés", price: 900, img: frances, stock: 9, initial: 2, rating: [4,4,4]}
        ]);
    }, 1000);
  });
  useEffect(()=>{
    task.then((res) => {
      setCatalogo(res);
    });
  }, [])
  console.log(catalogo);

  return (   
        <div className='row justify-content-center'>
        {
            catalogo.map((item, index) => {
            return (<Item key={index} id={item.id} country={item.country} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} rating={item.rating}/>);
            })
        }
        </div>
  );
}

export default ItemList