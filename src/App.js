import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Contacto from "./pages/Contacto"
import Precios from "./pages/Precios"
import Error from "./pages/Error"
import Headers from "./components/Headers"
import URLS from "./components/URLS"
import Backdrop from "./components/Backdrop"
import SideDrawer from './components/SideDrawer'
import './App.css';
import Pie from "./components/Pie"
import Lagunamilagros from "./pages/Lagunamilagros"

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <BrowserRouter>
      <div>
        <Headers drawerClickHandler={this.drawerToggleClickHandler.bind(this)}/>
        <URLS />
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        {backdrop}
        <Switch>
          <Route path="/" component={Inicio} exact/>
          <Route path="/precios" component={Precios}/>
          <Route path="/laguna-milagros" component={Lagunamilagros}/>
          <Route path="/contacto" component={Contacto}/>
          <Route component={Error}/>
        </Switch>
        <Pie/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;