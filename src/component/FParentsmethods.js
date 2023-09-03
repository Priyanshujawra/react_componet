import React, { Component } from "react";
import FINput from "./FINput.js";
class FParentsmethods extends Component {
  constructor(props) {
    super(props);

    this.componentRefs = React.createRef();
  }
  clickhandler=()=> {
    this.componentRefs.current.focus();
  }
  
  render() {
    return (
      <div>
        <FINput ref={this.componentRefs} />
        <button onClick={this.clickhandler}>Focus</button>
      </div>
    );
  }
}
export default FParentsmethods;
