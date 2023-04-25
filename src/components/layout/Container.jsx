import React, { Fragment } from 'react'
import Navbars from '../Navbars/Navbars'
import Footer from '../Footer/Footer'
const Container = (props) => {
  return (
    <Fragment>
        <Navbars/>
            {props.children}
        <Footer/>
    </Fragment>
  )
}

export default Container