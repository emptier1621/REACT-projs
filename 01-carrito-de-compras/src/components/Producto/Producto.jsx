import { useState } from "react";
import './Producto.css';

export function Producto({nombre, precio, stock, addProducto, removeElementFromCar, enCarrito, setEnCarrito}){
    const [stockValue, setStockValue] = useState(stock)
    const [units, setUnits] = useState(1)
    const [disable, setDisable] = useState(false)
    const onClickAddUnits = () => {
        
        if(units < stockValue){
            setUnits(Number(units)+1)
        }
    }
    const onClickRemoveUnits = () => {
        
        if(units > 0){
            setUnits(Number(units)-1)
        }
    }

    const onClickAgregar= () => {
        if(!enCarrito){
            const productoCarrito = {nombre:nombre, precio:precio, unidades:units}
            addProducto(productoCarrito)
            setStockValue(stockValue-units)
            setEnCarrito(true)
        }else{
            return(
                alert("El producto ya esta en el carrito.")    
            )
        }   
    }
    const onClickEliminar= () => {
        if(enCarrito){
            setStockValue(stockValue+units)
            removeElementFromCar({nombre:nombre,precio:precio,unidades:units})
            setEnCarrito(false)
        }else{
            return(
                console.log("Eliminado")    
            )
        }
    }
    const Agregar = () => {
        return <button className="btnOrder" onClick={onClickAgregar}> Agregar </button>
    }

    const Eliminar = () => {
        return <button className="btnRemove" onClick={onClickEliminar}> Eliminar </button>
    }

    const  Disabled = () => { 
        return <button className="btnOrder" disabled onClick={onClickEliminar}> 0 stock </button>
    }
    const AddBtn = () => {
        if(enCarrito || stockValue < 1){
            return <button disabled className="btnProduct" onClick={onClickAddUnits}> + </button>
        }else{
            return <button className="btnProduct" onClick={onClickAddUnits}> + </button>
        }
    }
    
    const RemoveBtn = () => {
        if(enCarrito || stockValue < 1){
            return <button disabled className="btnProduct" onClick={onClickRemoveUnits}> - </button>
        }else{
            return <button className="btnProduct" onClick={onClickRemoveUnits}> - </button>
        }
    }

    

    return(
        <div key={nombre+"Producto"} className="producto">
            <div className="info">
                <p className="nombre">{nombre}</p>
                <p className="precio"><strong>S/.</strong> {precio.toFixed(2)}</p>
                <p className="stock"><strong>Stock:</strong> {stockValue}</p>
            </div>
            <div className="options">
                <RemoveBtn/>
                <input className="pago" value={units} disabled/>
                <AddBtn/> 
                {(enCarrito)?(<Eliminar></Eliminar>):(stockValue>0?(<Agregar></Agregar>):(<Disabled></Disabled>))}
            </div>
        </div>    
    );
}