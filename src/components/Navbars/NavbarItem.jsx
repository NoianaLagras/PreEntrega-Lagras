import React from 'react'

const NavbarItem = (props) => {
  return (
    <li className="nav-item">
          <p className="nav-link active" aria-current="page" >{props.text}</p>
        </li>
  )
}

export default NavbarItem