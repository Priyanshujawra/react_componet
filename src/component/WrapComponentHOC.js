import React from "react";

const WrapComponent = (Priviewstate, incrementNumber) => {
  class WrapComponentHOC extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    clickhandler = () => {
      this.setState({
        count: this.state.count + incrementNumber,
      });
    };
    render() {
      return (
        <Priviewstate
          {...this.props}
          count={this.state.count}
          clickhandler={this.clickhandler}
          name="priyanshu"
        />
      );
    }
  }
  return WrapComponentHOC;
};
export default WrapComponent;
