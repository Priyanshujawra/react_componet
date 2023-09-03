import React, { Component } from 'react'
// import WrapComponent from './WrapComponentHOC'
 class HOC extends Component {

  render() {
    const {count,clickhandler,name} = this.props
    return (
      <div>
          <button onClick={clickhandler}> {name } Clicked {count} times</button>
      </div>
    )
  }
}
export default HOC