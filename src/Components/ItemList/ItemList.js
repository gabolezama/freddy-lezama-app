import React, { useState } from "react";
import Item from "./Item";
import brasilero from "../../assets/img/cafe-brasil.jpg";
import peruano from "../../assets/img/cafe-peruano.jpg";
import venezolano from "../../assets/img/cafe-fama-de-america.jpg";
import colombiano from "../../assets/img/juan-valdez.jpg";
import mexicano from "../../assets/img/cafe-mexicano.jpg";
import frances from "../../assets/img/cafe-frances.jpg";

function ItemList(props) {
    const { onAdd } = props;

  const [catalogo, setCatalogo] = useState([]);

  const task = new Promise((resolve) => {
    setTimeout(() => {
      catalogo.length === 0 &&
        resolve([
          { id: 1, title: "Café Colombiano", price: 1000, img: colombiano, stock: 5, initial: 1 },
          { id: 2, title: "Café Brasileño", price: 500, img: brasilero, stock: 0, initial: 3 },
          { id: 3, title: "Café Peruano", price: 800, img: peruano, stock: 8, initial: 2 },
          { id: 4, title: "Café Venezolano", price: 300, img: venezolano, stock: 0, initial: 5},
          { id: 5, title: "Café Mexicano", price: 500, img: mexicano, stock: 4, initial: 1},
          { id: 6, title: "Café Francés", price: 900, img: frances, stock: 9, initial: 2}
        ]);
    }, 2000);
  });

  task.then((res) => {
    setCatalogo(res);
  });
  console.log(catalogo);

  return (   
        <div className='row justify-content-center'>
        {
            catalogo.map((item, index) => {
            return (<Item key={index} id={item.id} title={item.title} price={item.price} stock={item.stock} initial={item.initial} img={item.img} onAdd={()=>onAdd()}/>);
            })
        }
        </div>
  );
}

export default ItemList