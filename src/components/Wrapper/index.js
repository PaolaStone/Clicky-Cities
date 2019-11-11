import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper container-fluid">{props.children}</div>;
}

export default Wrapper;
