import React, { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

function Loader() {
    const [ progress, setProgress ] = useState(0);

    const {loading} = useContext(CartContext)
    
    setTimeout(()=>{
        setProgress(progress < 100 ? progress + 20 : 0 )
    }, 500)

    return (
      loading && <>
        <div class="progress" style={{ height: ".3rem" }}>
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%`, height: ".3rem" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <span class="badge bg-secondary">Cargando...</span>
      </>
    );
}

export default Loader