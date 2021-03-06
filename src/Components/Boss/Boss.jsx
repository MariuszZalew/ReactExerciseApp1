import React from "react";
// import "./boss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const boss = props => {
  return (
    <div className="Person ">
      <p>
        I'm {props.name} and I am {props.age} years old!{" "}
        <FontAwesomeIcon icon="fist-raised" className="Point" />
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default boss;
