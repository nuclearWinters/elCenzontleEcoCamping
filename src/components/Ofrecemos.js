import React, { Component } from "react";
import Logo from "../imgs/logo.png";
import camping from "../imgs/b18.jpeg";
import kayak from "../imgs/b26.jpeg";
import daypass from "../imgs/b21.jpeg";
import hielera from "../imgs/b31.jpg";
import bici from "../imgs/b14.jpeg";

class Ofrecemos extends Component {
  render() {
    return (
      <div className="ofrecemos-container">
        <div className="ofrecemos">Alojamiento</div>
        <div className="Container">
          <div className="ContainerTall">
            <div className="ContainerSmall">
              <img
                className="Img"
                src={camping}
                alt="Camping Laguna Milagros Huay Pix"
              />
              <div className="description">
                <div>
                  Acampada (Trae tu casa de campaña o renta una con nosotros).
                </div>
                <div className="description-price">
                  $100.00 MXN o $150.00 MXN
                </div>
              </div>
            </div>
            <div className="ContainerSmall">
              <img
                className="Img"
                src={daypass}
                alt="Muelle Laguna Milagros Huay Pix"
              />
              <div className="description">
                <div>Pase por persona (DAY PASS)</div>
                <div className="description-price">$25.00 MXN</div>
              </div>
            </div>
          </div>
          <div className="ContainerTall">
            <div className="ContainerSmall">
              <img
                className="Img"
                src={hielera}
                alt="Bebidas Cerveza Laguna Milagros Huay Pix"
              />
              <div className="description">
                <div>
                  Hielera (Acceso de bebidas propias). ¡Exclusivamente
                  permitimos cervezas de la familia Corona y Modelo!
                </div>
                <div className="description-price">$100.00 MXN</div>
              </div>
            </div>
            <div className="ContainerSmall">
              <img
                className="Img"
                src={kayak}
                alt="Renta Kayaks Laguna Milagros Huay Pix"
              />
              <div className="description">
                <div>Renta de Kayaks (precio por hora)</div>
                <div className="description-price">$80.00 MXN</div>
              </div>
            </div>
          </div>
          <div className="ContainerTall">
            <div className="ContainerSmall">
              <img
                className="Img"
                src={bici}
                alt="Renta Bicicletas Laguna Milagros Huay Pix"
              />
              <div className="description">
                <div>Renta de Bicicletas (precio por hora)</div>
                <div className="description-price">$50.00 MXN</div>
              </div>
            </div>
            <div className="ContainerSmall">
              <img
                className="Img"
                src={Logo}
                alt="El Cenzontle Ecocamping Logo"
              />
              <div className="description">
                <div>Renta de Paddle Surf (precio por hora)</div>
                <div className="description-price">$100.00 MXN</div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: "bold",
            paddingTop: "20px"
          }}
        >
          Instalaciones:
        </div>
        <div className="instalaciones">
          <div>
            <li>Asoleaderos</li>
            <li>Recepción</li>
            <li>Zona de camping</li>
            <li>Muelle</li>
            <li>Comederos</li>
            <li>Biblioteca</li>
            <li>Cocina</li>
            <li>Tiendita</li>
            <li>Baños y Regaderas</li>
            <li>Areas verdes</li>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: "bold",
            paddingTop: "20px"
          }}
        >
          Información importante:
        </div>
        <div className="ofrecemos-big-big-box">
          <div className="ofrecemos-box">
            <div className="ofrecemos-small-box">
              1. INSTALACIONES DE USO COMUN SIN COSTO.- SANITARIOS; MUELLE;
              CAMASTROS, ASADOR.- (RESPETANDO DISPONIBILIDAD).
            </div>
          </div>
          <div className="ofrecemos-box">
            <div className="ofrecemos-small-box">
              2. LAS CASAS DE CAMPAÑA DISPONIBLES PARA RENTA SON CON CAPACIDAD
              PARA 3 Y 5 PERSONAS.
            </div>
          </div>
          <div className="ofrecemos-box">
            <div className="ofrecemos-small-box">
              3. LAS CERVEZAS ACEPTADAS SON EXCLUSIVAMENTE DE LA FAMILA CORONA Y
              MODELO.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ofrecemos;
