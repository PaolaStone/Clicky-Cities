import React from "react";
import "./style.css";

function CityCard(props) {
  return (
    <button className="btn">
      <div className="img-container">
         <img src={props.image} />
      </div>
    </button>
);
}

export default CityCard;
