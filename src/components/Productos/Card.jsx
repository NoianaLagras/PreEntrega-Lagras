import React from 'react'
function Card (props) {
  
  return (
    <div className='card'>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <button className= "addCart">Agregar al Carrito</button>
        <button className='addCart'>Quitar del Carrito</button>
    </div>
  )
}

export default Card