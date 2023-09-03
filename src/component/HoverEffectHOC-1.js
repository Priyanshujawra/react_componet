import React, { Component } from 'react'
// import WrapComponent from './WrapComponentHOC'
 class HOC1 extends Component {

  render() {
    const {count,clickhandler,name} = this.props
    return (
      <div>
          <button onMouseEnter={clickhandler}> {name} Hover {count} times</button>
      </div>
    )
  }
}
export default HOC1