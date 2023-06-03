import { Productos } from './components/Productos/Productos'
import { Carrito } from './components/Carrito/Carrito'
import { Total } from './components/Total';
import './App.css'
import { useState } from 'react';


function App() {
  const [carrito, setCarrito] = useState([])
  const addProducto = ({nombre,precio,unidades}) =>{
    setCarrito([...carrito, {nombre,precio,unidades}])
    setTotal(total + (precio*unidades))
  }

  const removeElementFromCar = ({nombre,precio,unidades})=> {
    const temp_carrito = carrito
    const elements = temp_carrito.filter(o => o.nombre !== nombre)
    setCarrito(elements)
    setTotal(total - (precio*unidades))
  }

  const [total, setTotal] = useState(0)

  const resetCarrito = () => {
    setCarrito([])
  }

  return (
    <main className='main'>
      
      <div className='panel'>
        <h1 className='titulo'>Carrito de compras</h1>
        <div className="left">
          <Productos removeElementFromCar={removeElementFromCar} addProducto={addProducto}></Productos>
        </div>
        <div className="right">
          <Carrito carrito={carrito} setCarrito={setCarrito}></Carrito>
        </div> 
        <div className="bottom">
            <Total total={total}></Total>
        </div> 
      </div>

      
    </main>
  )
}

export default App
