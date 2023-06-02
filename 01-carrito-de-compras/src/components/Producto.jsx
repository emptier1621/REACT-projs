export function Producto({nombre, precio, stock}){
    return(
        <div className="producto">
            <div className="info">
                <p className="nombre">{nombre}</p>
                <p className="precio"><strong>S/.{precio}</strong></p>
                <p className="stock"><strong>Stock:</strong> {stock}</p>
            </div>
            <div className="options">
                <button className="btnProduct"> - </button>
                <input value="1" disabled className="inpStock" name="inpStock" type="number"/>
                <button className="btnProduct"> + </button>
                <button className="btnOrder"> Agregar </button>
            
            </div>
            <hr/>
        </div>    
    );
}