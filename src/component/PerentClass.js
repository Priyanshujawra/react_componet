import React, { Component } from 'react'
import RegularClass from './RegularClass'
import PureComponentfirst from './PureComponent.js'

export default class PerentClass extends Component {
    constructor(){
        super()
        this.state={
            name:"Priyanka",
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Priyanka"
            })
        },2000)
    }
  render() {
    console.log("**************** render perent ******************")
    return (
      <div>
        PerentClass {this.state.name}
        <RegularClass name={this.state.name}/>
        <PureComponentfirst name={this.state.name}/>
      </div>
    )
  }
}
