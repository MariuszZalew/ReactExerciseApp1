import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

Greeting.defaultProps = {
  name: "John Doe"
};

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
