import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faFistRaised } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faFistRaised);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  delCharHandler = perIndex => {
    const persons = [...this.state.persons];
    persons.splice(perIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (e, id) => {
    // checking for the right 'person' index
    const char = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const per = {
      ...this.state.persons[char]
    };
    per.name = e.target.value;
    const persons = [...this.state.persons];
    persons[char] = per;

    this.setState({
      persons: [
        { name: e.target.value, age: 7899 },
        {
          name: "Blue",
          age: 9,
          plot: "My Hobbies: Fighting, I'm not the eloquent type you know"
        },
        { name: "Red", age: 17 }
      ]
    });
  };

  toggleCharactersHandler = () => {
    const lalaland = this.state.toggleChar;
    this.setState({ toggleChar: !lalaland });
    // !this.state.toggleChar;
  };

  render() {
    let characters = null;

    if (this.state.toggleChar) {
      characters = (
        <div>
          {this.state.persons.map((elem, index) => {
            return (
              <Person
                name={elem.name}
                age={elem.age}
                key={elem.id}
                click={this.delCharHandler.bind(this, index)}
                //debug this!!
                changed={this.nameChangeHandler}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>
          Hi, I'm a React App <FontAwesomeIcon icon="coffee" />
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
      </div>
    );
  }
}

export default App;
