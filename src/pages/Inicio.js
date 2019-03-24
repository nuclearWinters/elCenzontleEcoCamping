import React, { Component } from 'react';
import Galeria from "../components/Galeria"
import Ofrecemos from "../components/Ofrecemos"
import Alrededores from "../components/Alrededores"
import Ubicacion from "../components/Ubicacion"
import { Helmet } from 'react-helmet'

class Inicio extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Helmet>
          <title>Camping en Laguna Milagros, Huay Pix - El Cenzontle Ecocamping</title>
          <meta name={"description"} content="El Cenzontle Ecocamping: Camping ecológico en Laguna Milagros, Huay Pix. Lugar familiar y tranquilo donde estarás cerca de la naturaleza, ideal para camping, a la orilla de la Laguna Milagros y una calidez de servicio que te sentirás como en casa. Ven y disfruta pasear en bicicleta, kayakear (kayaks), usar un Paddle Surf, nadar o relajarte."/>
        </Helmet>
        <div className="main">  
          <Galeria/>
          <div className="description-cenz">
            Lugar familiar y tranquilo rodeado de la naturaleza, excelente para camping, a la orila de la Laguna Milagros, en Huay Pix, y con servicios para realizar actividades al aire libre.
          </div>
          <Ofrecemos/>
          <Alrededores />
          <Ubicacion/>
        </div>
      </div>
    );
  }
}

export default Inicio;