import React from "react";

function PurchaseModal(props){
    const { showModal } = props

    return(
        <div className="modalContainer">
            <div className="purchaseModal">
                <footer>
                    <button type="button" className="btn btn-danger" onClick={()=> showModal(false) }>Cancelar</button>
                </footer>
            </div>
        </div>
    )
}

export default PurchaseModal