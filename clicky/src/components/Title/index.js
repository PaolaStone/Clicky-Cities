import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Title(props) {
  return <div className= "container-fluid">
    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-4">Clicky Game!</h1>
      <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
              
  </div>
  
  
  // <h1 className="title">{props.children}</h1>;
}

export default Title;
