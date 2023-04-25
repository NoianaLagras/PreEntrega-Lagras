
import React from 'react';
import Card from './Card';
import Producto from '../../assets/images/anillo18.webp'
import Producto1 from '../../assets/images/anillo9.webp'
import Producto2 from '../../assets/images/anillo1.webp'
import Producto3 from '../../assets/images/anillo2.webp'
import Producto4 from '../../assets/images/anillo2.webp'
import Producto5 from '../../assets/images/anillo4.webp'
import Producto6 from '../../assets/images/anillo6.webp'
import Producto7 from '../../assets/images/anillo7.webp'
import Producto8 from '../../assets/images/collar.webp'
import Producto9 from '../../assets/images/anillo10.webp'
import Producto10 from '../../assets/images/collar1.webp'
import Producto11 from '../../assets/images/collar2.webp'
import Producto12 from '../../assets/images/collar3.webp'
import Producto13 from '../../assets/images/collar5.webp'
import Producto14 from '../../assets/images/pulsera6.webp'
import Producto15 from '../../assets/images/pulsera5.webp'
import Producto16 from '../../assets/images/anillo1.webp'
import Producto17 from '../../assets/images/pulsera9.webp'


function Productos() {

    const product =
    [
        {
            id: 1,
            name: "Anillo Loki",
            price: 1200,
            img: Producto,
            cantidad:1
        },
    
        {
            id: 2,
            name: "Anillo LOTR",
            price: 1400,
            img: Producto1,
            cantidad:1
        },
    
        {
            id: 3,
            name: "Anillo sol",
            price: 1000,
            img:Producto2,
            cantidad:1
        },  
    
        {
            id: 4,
            name: "Anillo infinito",
            price: 1200,
            img: Producto3,
            cantidad:1
        },  
    
         {
            id: 5,
            name: "Anillo LOTR",
            price: 1200,
            img: Producto4,
            cantidad:1
        },
    
            {
            id: 6,
            name: "Anillo NORD",
            price: 1300,
            img: Producto5,
            cantidad:1
        },
    
          {
            id: 7,
            name: "Anillo diamante",
            price: 1500,
            img: Producto6,
            cantidad:1
        },  
    
          {
            id: 8,
            name: "Anillo Thanos",
            price: 1800,
            img: Producto7,
            cantidad:1
        },  
    
          {
            id: 9,
            name: "Collar de corazon",
            price: 1100,
            img: Producto8,
            cantidad:1
        },  
    
          {
            id: 10,
            name: "Anillo Luna",
            price: 1000,
            img: Producto9,
            cantidad:1
        },
    
        {
            id: 11,
            name: "Collar Luna",
            price: 1700,
            img: Producto10,
            cantidad:1
        },
    
        {
            id: 12,
            name: "Collar de Corazon",
            price: 1100,
            img: Producto11,
            cantidad:1
        },  
    
        {
            id: 13,
            name: "Collar Corazon V",
            price: 2200,
            img: Producto12,
            cantidad:1
        }, 
    
        {
            id: 14,
            name: "Collar ",
            price: 900,
            img: Producto13,
            cantidad:1
        }, 
    
        {
            id: 15,
            name: "Pulsera Chakras",
            price: 800,
            img: Producto14,
            cantidad:1
        },  
    
        {
            id: 16,
            name: "Pulsera ByN",
            price: 1200,
            img: Producto15,
            cantidad:1
        },
    
        {
            id: 17,
            name: "Pulsera de Corazon",
            price: 1300,
            img: Producto16,
            cantidad:1
        },  
    
        {
            id: 18,
            name: "Pulsera Nord",
            price: 1200,
            img: Producto17,
            cantidad:1
        },
    ];

  return (
    <div className="productosContainer">
      <div>
      <h1 className='productosIndex'>Productos</h1>
      </div>
      <div className='productos'>
        {product.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
      </div>
      
    </div>
  );
}

export default Productos;
