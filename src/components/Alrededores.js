import React from 'react'
import calderitas from "../imgs/calderitas.jpg"
import bacalar from "../imgs/bacalar.jpg"
import chetumal from "../imgs/chetumal.jpg"

export default () => 
<div className="color-alrededores">
    <div className="ofrecemos">Alrededores:</div>
    <div className="Container">
        <div className="ContainerTall">
            <div className="ContainerSmall-alrededores">
                <img className="Img" src={chetumal} alt="Chetumal"/>
            </div>
            <div className="description-title">Chetumal</div>
            <div className="description-alrededores">¿Qué hacer si estas en Chetumal? La ciudad ofrece lugares de esparcimiento como el Boulevard Bahía e inclusive podrias visitar las ruinas de Oxtankah</div>
        </div>
        <div className="ContainerTall">
            <div className="ContainerSmall-alrededores">
                <img className="Img" src={calderitas} alt="Calderitas"/>
            </div>
            <div className="description-title">Calderitas</div>
            <div className="description-alrededores">Pueblo muy cercano a Chetumal, su principal atractivo son los restaurantes expecializados en platillos del mar y sus playas artificales para nadar</div>
        </div>
        <div className="ContainerTall">
            <div className="ContainerSmall-alrededores">
                <img className="Img" src={bacalar} alt="Bacalar"/>
            </div>
            <div className="description-title">Bacalar</div>
            <div className="description-alrededores">Bacalar es un pueblo que impresiona a cuaquiera con las increibles fotos que los viajeros se toman en ella, se puede disfrutar a travéz de sus muelles públicos, actividades recreativas acuaticas, restaurantes y hoteles.</div>
        </div>
    </div>
</div>