import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function NavBar() {
    return <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning row" >
        <div className="col col-med-4">
          <a className="navbar-brand left" href="#">Clicky Cities  </a>
        </div>
        <div className="col col-med-4">
        <a className="navbar-brand middle">Click an image to begin!</a>
        </div>
        <div className="col col-med-4">
          <a className="navbar-brand score">Score:</a>
        </div>
      </nav>
    </div>
}

export default NavBar;