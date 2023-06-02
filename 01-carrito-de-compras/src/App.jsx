import { Productos } from './components/Productos'
import './App.css'

function App() {

  return (
    <main>
      <h1>Carrito de compras</h1>
      <div className='container'>
        <div className="left">
          <Productos></Productos>
        </div>
        <div className="right">
          <div className='top'>
            {/*<Carrito></Carrito>*/}
          </div>
          <div className="bottom">

          </div>
        </div>
      </div>
    </main>
  )
}

export default App
