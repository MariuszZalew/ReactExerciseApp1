import React from "react";
import "./Person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const person = props => {
  return (
    <div className="Person ">
      <p>
        I'm {props.name} and I am {props.age} years old!{" "}
        <FontAwesomeIcon
          icon="coffee"
          onClick={props.click}
          className="Point"
        />
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
