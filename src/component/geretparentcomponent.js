import React, { Component } from 'react'
import Childcomponent from "./childcomponent.js";
class geretparentcomponent extends Component {
    constructor(props) {
        super(props)
        this.handelcliksystems = this.handelcliksystems.bind(this)
        this.state={
            parent:"parents"
        }
    }
    handelcliksystems() {
       alert(` hello ${this.state.parent}`)
    }
    render() {
        return (
            <div>
                <Childcomponent handelcliksystem={this.handelcliksystems} />
            </div>
        )
    }
}
export default geretparentcomponent