import { useState } from "react";

export const Total = ({total}) => {
    const [pago, setPago] = useState(0)
    const onChangeInput = (event)=>{
        const pagoInp = Number(event.target.value);
        setPago(pagoInp);
    }

    const vuelto = pago - total
    
    return(
        <div className="total">
            <h2>Caja:</h2>
            <h3 className="pago"><p>Pago con: </p> <input onChange={onChangeInput}/></h3>
            <h3 className="total-p"><p>Total: </p>S/. {total}</h3>
            <h3 className="vuelto"><p>Vuelto: </p>{vuelto}</h3>
        </div>
    )
}