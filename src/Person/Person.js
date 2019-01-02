import React from "react";
import "./Person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const person = props => {
  return (
    <div className="Person ">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!{" "}
        <FontAwesomeIcon icon="fist-raised" />
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
