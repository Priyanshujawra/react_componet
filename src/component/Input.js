import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    this.inputrefs = React.createRef();

  }

  focusInput() {
    // Access and use the ref to focus the input element
    this.inputrefs.current.focus();
  };
  render() {
    return (
      <div>
        <input type="text"  ref={this.inputrefs}/>
        {/* <button onClick={this.focusInput}>Focus Input</button> */}
      </div>
    );
  }
}

export default Input;
