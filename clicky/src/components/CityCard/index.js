import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";


function CityCard(props) {
  return (
    <div >
      <div className="row">
        <div className="column">
        <button className="btn">
          <div className="img-container">
            <img src={props.image} />
          </div>
        </button>
        </div>
    </div>
    
   </div>
    
);
}


export default CityCard;
