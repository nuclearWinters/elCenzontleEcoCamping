import React, { Component } from 'react';
import Ubicacion from "../components/Ubicacion"
import { Helmet } from 'react-helmet'

class Contacto extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
      <Helmet>
          <title>El Cenzontle Ecocamping - Información de contacto</title>
          <meta name={"description"} content="El Cenzontle Ecocamping: Información de contacto; Telefono: 983 213 8521, E-mail: elcenzontleecocamping@gmail.com"/>
        </Helmet>
        <div className="main">  
          <Ubicacion/>
        </div>
      </div>
    );
  }
}

export default Contacto;