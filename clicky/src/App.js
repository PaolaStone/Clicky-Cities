import React, { Component } from "react";
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cities from "./cities.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cities
  };

  render() {
    return (
      <Wrapper>
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
