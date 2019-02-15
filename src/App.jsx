import React, { Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";
import Boss from "./Components/Boss/Boss";
// import Other from "./OtherComponent/Other";
import Movies from "./OtherComponent/Movies.jsx";
import "bootstrap/dist/css/bootstrap.css";
import PersonContainer from "./Components/PersonContainer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFistRaised,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faFistRaised, faSpinner);

class App extends Component {
  //CLASS state
  state = {
    boss: {
      name: "Yujiro Hanma",
      age: 999,
      id: "gehq931"
    },
    persons: [
      { name: "Yujiro", age: 78, id: "ahet856" },
      {
        name: "Jack",
        age: 29,
        plot: "My Hobbies: Fighting",
        id: "witb025"
      },
      { name: "Baki", age: 27, id: "pzra084" }
    ],
    toggleChar: false,
    buttons: ["btn btn-success", "btn btn-danger"]
  };

  //CLASS RENDER!

  render() {
    //Variables
    let characters = null;
    const { boss } = this.state;
    if (this.state.toggleChar) {
      characters = (
        <div>
          <Boss
            name={boss.name}
            age={boss.age}
            key={boss.id}
            click={this.delCharHandler.bind(this, boss.id)}
            changed={this.nameChangeHandler}
          />
          {/* here I can put another component */}
          <PersonContainer
            persons={this.state.persons}
            changed={this.nameChangeHandler2}
            click={this.delCharHandler}
          />
        </div>
      );
    }
    //Render RETURN!
    return (
      <div className="App">
        <h1>
          Hi, I'm a React App <FontAwesomeIcon icon="spinner" spin />
        </h1>
        <p>This is really working!</p>
        <button
          className={
            this.state.toggleChar
              ? this.state.buttons[1]
              : this.state.buttons[0]
          }
          onClick={this.toggleCharactersHandler}
        >
          Toggle Characters
        </button>
        {characters}
        {/* place for another component element */}
        {/* <Other /> */}
        {/* <Movies /> */}
      </div>
    );
  }

  //CLASS methods
  delCharHandler = perKey => {
    let persons = [...this.state.persons];
    persons = persons.filter(va => va.id !== perKey);
    this.setState({ persons });
  };

  nameChangeHandler = e => {
    this.setState({
      boss: { name: e.target.value }
    });
  };

  nameChangeHandler2 = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  toggleCharactersHandler = () => {
    const lalaland = this.state.toggleChar;
    this.setState({ toggleChar: !lalaland });
  };
}

export default App;
