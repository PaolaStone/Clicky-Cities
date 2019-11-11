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




// function shuffleData(){
//   data => {
//     let i = data.length - 1;
//     while (i > 0) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = data[i];
//       data[i] = data[j];
//       data[j] = temp;
//       i--;
//     }
//     return data;
// } 
// };

export default CityCard;
