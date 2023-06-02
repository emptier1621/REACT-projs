import { products } from "../constantes"
import { Producto } from "./Producto";

export const Productos = ({}) => {
    const productos = products
    return(
        <div className="productos">
        <h2>Productos: </h2>
        {
            productos.map((producto, index)=>{
               return (<Producto nombre={producto.nombre} stock={producto.stock} precio={producto.precio}  ></Producto>)
            })
        }
        </div>
    
    );
}