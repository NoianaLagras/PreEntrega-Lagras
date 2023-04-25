import React from 'react'
import './App.css';
import Carousel from './components/Carrousel/Carousel';
import Productos from './components/Productos/Products';
import Container from './components/layout/Container';
import Saludo from './components/Saludo';
function App() {
  return (
    <div>
      <Container>
        <Carousel/>
        <Saludo greeting="Bienvenidos a mi Tienda"/>
        <Productos/>
      </Container>
    </div>
  );
}

export default App;