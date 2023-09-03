import React, { Component } from 'react'

 class RegularClass extends Component {
  render() {
    console.log("Regular methods");
    return (
      <div>
           RegularClass {this.props.name}
      </div>
    )
  }
}
export default  RegularClass