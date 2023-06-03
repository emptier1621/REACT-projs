import { useState } from "react";

export function ProductoCarrito({nombre, precio, unidades}){
    const new_unidades = unidades;
    return(
        <div className="producto-carrito">
            <div className="info">
                <p className="nombre">{nombre}</p>
                <p className="stock"><strong>Cantidad:</strong> {new_unidades}</p>
                <p className="precio"><strong>Precio: </strong>S/. {precio*unidades}</p>
            </div>
            <hr/>
        </div>    
    );
}