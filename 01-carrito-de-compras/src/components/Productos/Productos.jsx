import { useState } from "react";
import { products } from "../../constantes"
import { Producto } from "../Producto/Producto";
import './Productos.css';

export const Productos = ({addProducto, removeElementFromCar}) => {
    const productos = products
    return(
        <div className="productos">
            <h2>Productos: </h2>
            {
                productos.map((producto, index)=>{
                    const [enCarrito, setEnCarrito] = useState(false)
                    return (<Producto removeElementFromCar={removeElementFromCar}  addProducto={addProducto} enCarrito={enCarrito} setEnCarrito={setEnCarrito} key={producto.nombre} nombre={producto.nombre} stock={producto.stock} precio={producto.precio}  ></Producto>)
                })
            }
        </div>
    
    );
}