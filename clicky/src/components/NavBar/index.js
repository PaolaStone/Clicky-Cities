import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function NavBar(props) {
    return <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning row" >
        <div className="col col-med-4">
          <a className="navbar-brand left">Clicky Cities</a>
        </div>
        <div className="col col-med-4">
          <a className="navbar-brand score">{props.children}</a>
        </div>
      </nav>
    </div>
}

export default NavBar;
function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}