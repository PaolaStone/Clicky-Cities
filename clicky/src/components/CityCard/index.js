import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";


function CityCard(props) {
  return (
    
      
        <div className="col col-md-3">
        <button className="btn">
          <div className="img-container">
            <img src={props.image} />
          </div>
        </button>
        </div>
    
    
   
    
);
}


export default CityCard;
