import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: "Yujiro", age: 78 },
        {
          name: "Jack",
          age: 299,
          plot: "My Hobbies: Fighting"
        },
        { name: "Baki", age: 27 }
      ],
      toggleChar: false
    };
  }

  switchNameHandler = (arg1 = "one", arg2 = "two", arg3 = "three") => {
    this.setState({
      persons: [
        { name: arg1, age: 7899 },
        {
          name: arg2,
          age: 9,
          plot: "My Hobbies: Fighting, I'm not the eloquent type you know"
        },
        { name: arg3, age: 17 }
      ]
    });
  };
  nameChangeHandler = e => {
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangeHandler}
            click={this.switchNameHandler.bind(
              this,
              "Yujiro",
              "Doppo",
              "Atsushi"
            )}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(
              this,
              "Atsushi Suedou",
              "Mitsunari Tokugawa",
              "Izo Motobe"
            )}
          >
            {this.state.persons[1].plot}
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "One", "Two", "Three")}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.toggleCharactersHandler}>
          Toggle Characters
        </button>
        {characters}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    // git remote set-url origin git@github.com:username/projectname.git
  }
}

export default App;
