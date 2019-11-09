import React, { Component } from "react";
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import cities from "./cities.json";

class App extends Component {
 
  state = {
    cities
  };

  render() {
    return (
      <Wrapper>
        <NavBar/>
        <Title/>
        <div className="container">
        <div className="row">
          {this.state.cities.map(city => (
            <CityCard
              id={city.id}
              key={city.id}
              image={city.image}
            />
          ))}
        </div>
        </div>
        
        
      </Wrapper>
    );
  }
}

export default App;
