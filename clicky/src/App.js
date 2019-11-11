import React, { Component } from "react";
import CityCard from "./components/CityCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import cities from "./cities.json";

let score = 0;
let bestRun = 0


class App extends Component {

  state = {
    cities,
    score,
    bestRun
  };

  handleClicked = id => {
    const cities = this.state.cities;
    const clickedCity = cities.filter(city => city.id === id );
      // console.log ("clicked once before if")
      // console.log("clickedCity  " + clickedCity[0].id)
      if(clickedCity[0].clicked) {
        // console.log ("clicked twice  clickedCity" + clickedCity)
        score = 0;
        alert("This is the end! Remember, each image can be clicked just once")

        for (let i = 0; i<cities.length; i++) {
          cities[i].clicked = false;
          // console.log (cities)
        }
        this.setState({score});
        this.setState({cities})

    } else {
      clickedCity[0].clicked = true
      score = score + 1;
      if (score > bestRun) {
        bestRun = score;
        this.setState({bestRun})
      }
      
      if (score === 12) {
        alert("You did it, congratulations!");
        score = 0;
        for (let i = 0; i<cities.length; i++) {
          cities[i].clicked = false;
         
        }
      }
      cities.sort(function(a, b){return 0.5 - Math.random()})
      
      this.setState({cities});
      this.setState({score});

      if (score === 12) {
        alert("You did it, congratulations!");
        score = 0;
        for (let i = 0; i<cities.length; i++) {
          cities[i].clicked = false;
         
        }
      }

    //   function shuffleCities(){
    //     data => {
    //       let i = cities.length - 1;
    //       while (i > 0) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         const temp = data[i];
    //         data[i] = data[j];
    //         data[j] = temp;
    //         i--;
    //       }
    //       return data;
    //     } 
    // };
        
    }

  }
  render() {
    return (
      <Wrapper>
        <NavBar>
          Best run: {this.state.bestRun}
          <br>
          </br>
          Score: {this.state.score}  
        </NavBar>
        <Title>
          Clicky Game!
        </Title>
        <div className="container">
          <div className="row">
            {this.state.cities.map(city => (
              <CityCard
                handleClicked={this.handleClicked}
                id={city.id}
                key={city.id}
                image={city.image}
              />
            ))}
          </div>
        </div>
        
      <Footer/>

      </Wrapper>
    );
  }
}

export default App;
