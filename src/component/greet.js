import React, { Component } from "react";
class Greet extends Component {
  render() {
    const { name, superhero } = this.props;
    return (
      <div>
        <h1>
          Hello {name} welcome on my website and your superhero is {superhero}
        </h1>
      </div>
    );
  }
}

export default Greet;
