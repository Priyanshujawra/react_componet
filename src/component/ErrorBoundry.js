import React, { Component } from "react";
import PortalComponent from "./Portal-dom";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error,info){
    console.log(error)
    console.log(info)
  }
  render() {
    if (this.state.hasError) {
      return <h1>something went worng</h1>;
    }
    return (
      <PortalComponent>
        <h1>{this.props.children}</h1>
      </PortalComponent>
    );
  }
}
export default ErrorBoundry;
