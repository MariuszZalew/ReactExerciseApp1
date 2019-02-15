import React from "react";

const NumComparison = props => {
  return (
    <div>
      <div>{`A is: ${props.a}, b is: ${props.b}`}</div>
      {props.a > props.b ? "A is bigger" : "B is bigger"}
    </div>
  );
};

export default NumComparison;
