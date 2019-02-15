import React from "react";

import "./Counter.css";

class Counter extends React.Component {
  state = { clicks: 0 };
  static defaultProps = {
    max: 10,
    min: 0,
    step: 3
  };

  handleIncClick = () => {
    if (this.state.clicks + this.props.step <= this.props.max) {
      this.setState({
        clicks: this.state.clicks + this.props.step
      });
    }
  };

  handleDecClick = () => {
    if (this.state.clicks - this.props.step >= this.props.min) {
      this.setState({
        clicks: this.state.clicks - this.props.step
      });
    }
  };

  render() {
    console.log("Counter render", this.state);
    const { max, min, step } = this.props;
    const { clicks } = this.state;
    return (
      <div className="counter">
        <div>
          You clicked {clicks} times, max is {max}, min is {min}, step is {step}
        </div>
        <button onClick={this.handleIncClick}>+</button>
        <button onClick={this.handleDecClick}>-</button>
      </div>
    );
  }
}

export default Counter;
