import React, { Component } from 'react';
import logo from "../imgs/logo.png"
import Fc from "../imgs/Fc.png"
import In from "../imgs/In.png"
//import Select from 'react-select'

class Headers extends Component {

  render() {
    return (
      <div className="header">
        <div className="LogoBox">
          <a href="https://www.facebook.com/Cenzontlecamping/" style={{display: "flex", alignItems: "center"}}>
            <img style={{width: "40px", height: "40px", margin: "0px 10px"}} src={Fc} alt=""/>
          </a>
          <img height="100px" src={logo} alt="El Cenzontle Ecocamping"/>
          <a href="https://www.instagram.com/elcenzontleecocamping/" style={{display: "flex", alignItems: "center"}}>
            <img style={{width: "40px", height: "40px", margin: "0px 10px"}} src={In} alt=""/>
          </a>
        </div>
        <div className="SelectBox">
          <div className="Burger">
            <button className="toggle-button" onClick={this.props.drawerClickHandler}>
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Headers;

/*<div className="SelectBoxWidth">
            <Select value={selectedOption} options={options} onChange={this.handleChange}/>
          </div>*/