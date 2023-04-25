import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import NavbarItem from './NavbarItem'
import Logo from '../../assets/images/Logo.webp'
import '../../App.css'

const Navbars = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky">
    <div><img src={Logo} alt="Logo" className='logoP' /></div>
  <div className="container-fluid">
    <p className="navbar-brand" >Neathur Shop ...</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavbarItem text={'Home'}/>
      <NavbarItem text={'Productos'}/>

        <li className="nav-item dropdown">
          <p className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Informacion
          </p>
          <ul className="dropdown-menu bg-dark">
          <NavbarItem text={'Medida de anillos'}/>
          <NavbarItem text={'Preguntas Frecuentes'}/>
          <NavbarItem text={'About'}/>
          </ul>
        </li>
        <NavbarItem text={'Contacto'}/>

      </ul>
    </div>
  </div>
  <h2><BsFillCartFill/>0</h2>
</nav>
  )
}

export default Navbars