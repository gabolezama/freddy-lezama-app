import React, { useState } from "react";
import Item from "./Item";

function ItemList(props) {
    const { onAdd } = props;

  const [catalogo, setCatalogo] = useState([]);

  const task = new Promise((resolve) => {
    setTimeout(() => {
      catalogo.length === 0 &&
        resolve([
          { id: 1, title: "Café Colombiano", price: 1000 },
          { id: 2, title: "Café Brasileño", price: 500 },
          { id: 3, title: "Café Peruano", price: 800 },
          { id: 4, title: "Café Venezolano", price: 300 },
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
                return ( <Item key={index} id={item.id} title={item.title} price={item.price} onAdd={ ()=>onAdd()}/>);
                })
            }
        </div>
  );
}

export default ItemList