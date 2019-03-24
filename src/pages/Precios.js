import React, { Component } from 'react';
import PreciosComponent from '../components/PreciosComponent';
import { Helmet } from 'react-helmet'

class Inicio extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Helmet>
          <title>El Cenzontle Ecocamping - Información sobre precios</title>
          <meta name={"description"} content="El Cenzontle Ecocamping: Información sobre los precios en rentas de kayaks, bicicletas y costos de acampar (camping) o visitar el lugar."/>
        </Helmet>
        <div className="main">  
          <PreciosComponent />
        </div>
      </div>
    );
  }
}

export default Inicio;