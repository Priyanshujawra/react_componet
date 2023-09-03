import React, { Component } from 'react';
import Input from './Input';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    this.componentRefs = React.createRef();

  }

  clickhandler = () => {
    // Access and use the ref to focus the input element
    this.componentRefs.current.focusInput();
  };
  render() {
    return (
      <div>
         <Input ref={this.componentRefs}/>
        <button onClick={this.clickhandler}>Focus Input</button>
      </div>
    );
  }
}

export default MyComponent;
