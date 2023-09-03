import React, { Component } from "react";

class counterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  clickhandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return <div>{this.props.render(this.state.count, this.clickhandler)}</div>;
  }
}

export default counterExample;
