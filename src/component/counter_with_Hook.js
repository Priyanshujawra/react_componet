import React, { Component } from "react";

class couter_with_Hook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>count {this.state.count}</button>
      </div>
    );
  }
}
export default couter_with_Hook;
