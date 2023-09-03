import React, { Component } from 'react'

class eventbind extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hello"
        }
    }
    handle(){
        this.setState({
            message:"thanks"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handle.bind(this)}>click</button>
      </div>
    )
  }
}

export default eventbind
