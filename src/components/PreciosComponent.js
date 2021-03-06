import React from "react";
import "./PreciosComponent.css";

export default () => (
  <div className="color-contacto">
    <div className="ofrecemos">Alojamiento</div>
    <table className="titulo">
      <tbody>
        <tr>
          <th style={{ width: "75%" }}>Servicio</th>
          <th style={{ width: "25%" }}>Precio</th>
        </tr>
        <tr>
          <td>
            <div>
              Acampada por persona / por día (con casa de campaña propia)
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Adolecentes de 9 a 15 años $80.00 por persona
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Menores a 8 años no pagan
            </div>
          </td>
          <td>$100.00 MXN</td>
        </tr>
        <tr>
          <td>
            <div>
              Acampada por persona / por día (con casa de casa de campaña
              incluida)
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Adolecentes de 9 a 15 años $100.00 por persona
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Menores a 8 años no pagan
            </div>
          </td>
          <td>$150.00 MXN</td>
        </tr>
        <tr>
          <td>
            <div>Pase por persona / DAY PASS</div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Incluye uso de las instalaciones y sanitarios
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Menores a 9 años no pagan
            </div>
          </td>
          <td>$25.00 MXN</td>
        </tr>
        <tr>
          <td>
            <div>
              Hielera (les permite el acceso de una hielera con bebidas propias)
            </div>
            <div style={{ color: "maroon", marginTop: "5px" }}>
              Nota importante: Las cervezas aceptadas son exclusivamente de la
              familia corona y modelo.
            </div>
          </td>
          <td>$100.00 MXN</td>
        </tr>
      </tbody>
    </table>
    <div className="ofrecemos">Rentas</div>
    <table className="titulo">
      <tbody>
        <tr>
          <th style={{ width: "75%" }}>Rentas</th>
          <th style={{ width: "25%" }}>Precio</th>
        </tr>
        <tr>
          <td>Renta de Kayaks (precio por hora)</td>
          <td>$80.00 MXN</td>
        </tr>
        <tr>
          <td>Renta de Bicicletas (precio por hora)</td>
          <td>$50.00 MXN</td>
        </tr>
        <tr>
          <td>Renta de Paddle Surf (precio por hora)</td>
          <td>$100.00 MXN</td>
        </tr>
        <tr>
          <td>{`
          Renta de unicornio inflable (precio por hora o $50.00 todo el dia)
          `}</td>
          <td>$30.00 MXN</td>
        </tr>
      </tbody>
    </table>
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
          2. LAS CASAS DE CAMPAÑA DISPONIBLES PARA RENTA SON CON CAPACIDAD PARA
          3 Y 5 PERSONAS.
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
