import { ProductoCarrito } from "../ProductoCarrito"
import './Carrito.css';
export const Carrito = ({carrito}) => {
    if(carrito.length === 0) return (
        <div className="carrito">
            <h2>Carrito</h2>
            <p>Sin elementos en el carrito...</p>
        </div>
    )

    return (
        <div className="carrito">
        <h2>Carrito</h2>
        {
            carrito.map(producto => {
                return(
                    <ProductoCarrito  nombre={producto.nombre} precio={producto.precio} unidades={producto.unidades}></ProductoCarrito>
                )
            })
        }
        </div >
        
        
    )
}