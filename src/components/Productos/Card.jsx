import React, { useState } from 'react'
function Card (props) {
  const [numero,setNumero] = useState(0)
  const sumar = () => {
    setNumero(numero+1)
  }
  const restar = () => {
    if (numero>0){
      setNumero(numero-1)
    }
  }
  return (
    <div className='card'>
        <img src={props.img} alt={props.name} />
        <p className='cantidadCard'>{numero}</p>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <button className= "addCart" onClick={sumar}>Agregar al Carrito</button>
        <button className='addCart' onClick={restar}>Quitar del Carrito</button>
    </div>
  )
}

export default Card