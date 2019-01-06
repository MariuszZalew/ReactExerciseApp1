import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Boss from "./Boss/Boss";
import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFistRaised,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faFistRaised, faSpinner);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  delCharHandler = perKey => {
    let persons = [...this.state.persons];
    persons = persons.filter(va => va.id !== perKey);
    // persons.splice(perKey, 1);
    this.setState({ persons });
  };

  nameChangeHandler = e => {
    // checking for the right 'person' index
    // const char = this.state.persons.findIndex(person => {
    //   return person.id === 0;
    // });

    // const per = {
    //   ...this.state.persons[char]
    // };
    // per.name = e.target.value;

    // const persons = [...this.state.persons];
    // persons[char] = per;

    this.setState({
      boss: { name: e.target.value }
    });
  };

  toggleCharactersHandler = () => {
    const lalaland = this.state.toggleChar;
    this.setState({ toggleChar: !lalaland });
  };

  render() {
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
            //debug this!!
            changed={this.nameChangeHandler}
          />
          {this.state.persons.map(elem => {
            const keyOf = elem.id;
            return (
              <Person
                name={elem.name}
                age={elem.age}
                key={elem.id}
                click={this.delCharHandler.bind(this, keyOf)}
              />
            );
          })}
        </div>
      );
    }

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
      </div>
    );
  }
}

export default App;
