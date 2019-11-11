import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";


const CityCard = props => (
    <div onClick={() => props.handleClicked(props.id)} className="col col-md-3">
      <button className="btn" onClick = {props.onClick}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </button>
    </div>
  );

  export default CityCard;
