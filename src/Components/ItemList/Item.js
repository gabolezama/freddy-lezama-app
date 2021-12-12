import React from "react";

function Item(props){
    const {
        id,
        title,
        price
    } = props
    console.log('holi' , props);
    return(
        <div>
            <p>{ id }</p>
            <p>{ title }</p>
            <p>{ price }</p>
        </div>
    )
}

export default Item