import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Jack" age="28" />
        <Person name="Yujiro" age="29">
          My Hobbies: Fighting
        </Person>
        <Person name="Baki" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    // git remote set-url origin git@github.com:username/projectname.git
  }
}

export default App;
