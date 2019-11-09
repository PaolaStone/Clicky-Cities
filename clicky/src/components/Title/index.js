import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Title(props) {
  return <div className= "container-fluid">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-warning col-lg-12 col-md-6 col-sm-6" >
        <a className="navbar-brand left" href="#">Clicky Cities  </a>
        <a className="navbar-brand middle">Click an image to begin!</a>
        <a className="navbar-brand score">Score:</a>
        
      </nav>
      
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
      </div>
              
    </div>
  
  
  // <h1 className="title">{props.children}</h1>;
}

export default Title;
