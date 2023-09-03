import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    this.myInputRef = React.createRef();
    this.crfs = null;
    this.callback = element => {
      this.crfs = element
    }
  }

  focusInput = () => {
    // Access and use the ref to focus the input element
    this.myInputRef.current.focus();
  };
  componentDidMount() {
    console.log("mount")
    this.crfs.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef} />
        <input type="text" ref={this.callback} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default MyComponent;
