import React from "react";
import Person from "./Person/Person";

const PersonContainer = ({ persons, click, changed }) => {
  return (
    <div>
      {persons.map(({ name, age, id }) => {
        return (
          <Person
            name={name}
            age={age}
            key={id}
            click={() => click(id)}
            changed={e => changed(e, id)}
          />
        );
      })}
    </div>
  );
};

export default PersonContainer;
