// imr = import react (only)
// nfn = functional component
// efn = exported functional component
// rcc/rce = class based component w/export
// est = state
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({ count });
  }

  // renderTags() {
  //   return this.state.tags.length === 0 ? (
  //     <p>There are no tags!</p>
  //   ) : (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    return (
      <div style={{ fontSize: 30, margin: 15 }}>
        <span className={this.getClasses()}>{this.formatCount()}</span> {"   "}
        <button
          onClick={this.incrementCount.bind(this)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
