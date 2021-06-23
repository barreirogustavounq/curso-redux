import React, { Component } from "react";
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

export default class Resultado extends Component {
  mostrarImagenes = () => {
    const imgn = this.props.imagenes;
    if (imgn.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {imgn.map((i) => (
            <Imagen key={i.id} imagen={i} />
          ))}
        </div>
        <Paginacion
          paginaSiguiente={this.props.paginaSiguiente}
          paginaAnterior={this.props.paginaAnterior}
        />
      </React.Fragment>
    );
  };

  render() {
    return <React.Fragment>{this.mostrarImagenes()}</React.Fragment>;
  }
}