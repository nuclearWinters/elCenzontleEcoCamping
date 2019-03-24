import React from 'react'
import { NavLink } from "react-router-dom"

export default () => 
<div className="container-urls">
    <div className="urls">
        <NavLink to="/"><div className="color-url">Inicio</div></NavLink>
        <NavLink to="/precios"><div className="color-url">Precios</div></NavLink>
        <NavLink to="/laguna-milagros"><div className="color-url">Laguna Milagros</div></NavLink>
        <NavLink to="/contacto"><div className="color-url">Contacto</div></NavLink>
    </div>
</div>