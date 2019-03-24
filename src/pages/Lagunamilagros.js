import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { NavLink } from "react-router-dom"
import c1 from "../imgs/c1.jpg"
import c2 from "../imgs/c2.jpg"
import c3 from "../imgs/c3.jpg"
import c4 from "../imgs/c4.jpg"
import c5 from "../imgs/c5.jpg"

const styleTitle={textAlign: "center"}

class Contacto extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <Helmet>
          <title>Laguna Milagros, un lugar tranquilo y familiar - El Cenzontle Ecocamping</title>
          <meta name={"description"} content="La Laguna Milagros se ubica a 15 km de Chetumal, la cual extiende a lo largo de sus 3 km un azul turquesa hermoso que rivaliza con el cielo para llamar tu atención; el lugar es especialmente tranquilo como para ir en pareja, con la familia y amigos."/>
        </Helmet>
        <div className="main"> 
            <h1 className="ofrecemos laguna">Laguna Milagros... Un lugar ideal para visitar con amigos y familia.</h1>
            <div className="description-cenz laguna">
                La Laguna Milagros se ubica a 15 km de Chetumal, la cual extiende a lo largo de sus 3 km un azul turquesa hermoso que rivaliza con el cielo para llamar tu atención; el lugar es especialmente tranquilo como para ir en pareja, con la familia y amigos.
            </div>
            <div className="Container">
                <div className="ContainerTall">
                    <div className="ContainerSmall-alrededores">
                        <img className="Img" src={c4} alt="Muelle Laguna Milagros"/>
                    </div>
                </div>
                <div className="ContainerTall">
                    <div className="ContainerSmall-alrededores">
                        <img className="Img" src={c5} alt="Laguna Milagros"/>
                    </div>
                </div>
            </div>
            <h2 style={styleTitle}>¿Dondé se ubica?</h2>
            <div className="text-blog">
                Se ubica en el pueblo de Huay Pix, ideal para pasar una tarde o unos cuantos días de tranquilidad y paz. Este pueblito es reconocido por tener restaurantes familiares y es lugar de varias competencias acuáticas pues cuenta con infraestructura ideal para el canotaje. 
            </div>
            <div className="text-blog">
                La laguna está rodeada de cabañas y lugares para acampar por lo que si alguna vez decides venir <NavLink style={{textDecoration:"none"}} to="/contacto">¡Visítanos!</NavLink>
            </div>
            <h2 style={styleTitle}>¿Comó llegar?</h2>
            <div className="text-blog">
                Llegar te tomara unos 20 minutos en coche desde Chetumal y deberás tomar la Avenida Álvaro Obregón para salir y llegar a la carretera 186 para toparte con el poblado de Huay Pix y preguntar por la laguna.
            </div>
            <h2 style={styleTitle}>¿Qué tipo de hospedajes hay?</h2>
            <div className="text-blog">
                Para hospedarte existe una variedad de opciones para escoger; ya sea hoteles pequeños, cabañas, Airbnb y zonas para acampar, puedes saber que si buscas alejarte del bullicio y buscas autenticidad pasaras muy bien las noches aquí.
            </div>
            <h2 style={styleTitle}>¿Qué experiencia cerca de la laguna ofrecemos?</h2>
            <div className="text-blog">
                Si eres amante de la naturaleza te recomendamos disfrutar de la orilla de la laguna con una experiencia cara a cara con esta y puedes sentirte tranquilo de saber que tu estadía con nosotros será lo mas ecológica posible.</div>
            <div className="Container">
                <div className="ContainerTall">
                    <div className="ContainerSmall-alrededores">
                        <img className="Img" src={c1} alt="Tortuga Laguna Milagros"/>
                    </div>
                </div>
                <div className="ContainerTall">
                    <div className="ContainerSmall-alrededores">
                        <img className="Img" src={c2} alt="Aves Laguna Milagros"/>
                    </div>
                </div>
                <div className="ContainerTall">
                    <div className="ContainerSmall-alrededores">
                        <img className="Img" src={c3} alt="Perros Laguna Milagros"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contacto;