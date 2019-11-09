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

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Cities</Title>
        {this.state.cities.map(city => (
          <CityCard
            id={city.id}
            key={city.id}
            image={city.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
