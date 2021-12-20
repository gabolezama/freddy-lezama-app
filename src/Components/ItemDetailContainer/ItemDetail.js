import React from "react";

function ItemDetail(props) {
  const { bandera, name, region, rating } = props;
 const starNum = rating.split(',')

  return (
    <div className="container row">
      <div className="container col">
        <h1>{`Detalles para ${name}`}</h1>
        <img id="banderaDetail" src={bandera} />
      </div>
      <div className="container col">
        <h1>Descripción del producto</h1>
        <div className='row'>
            <div className='col'>
                <p>Ubucación: {region}</p>
                <p>
                Cuerpo:
                <div className="star-rating">
                    {[...Array(parseInt(starNum[0]))].map(() => {
                    return <span className="star">&#9733;</span>;
                    })}
                </div>
                </p>
                <p>
                Amargo:
                <div className="star-rating">
                    {[...Array(parseInt(starNum[1]))].map(() => {
                    return <span className="star">&#9733;</span>;
                    })}
                </div>
                </p>
                <p>
                Acido:
                <div className="star-rating">
                    {[...Array(parseInt(starNum[2]))].map(() => {
                    return <span className="star">&#9733;</span>;
                    })}
                </div>
                </p>
            </div>  
            <div className='col'>
                    <p>Esta es un breve parrafo descriptivo del producto
                    Que incluye características propias de cada país de origen
                    Descripciones de costumbres sobre la babida y cultura propia
                    </p>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default ItemDetail