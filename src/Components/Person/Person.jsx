import React from "react";
import "./Person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Person = ({ name, age, click, changed, children }) => {
  return (
    <div className="Person ">
      <p>
        I'm {name} and I am {age} years old!{" "}
        <FontAwesomeIcon icon="coffee" onClick={click} className="Point" />
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;
