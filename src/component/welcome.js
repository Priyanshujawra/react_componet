
import React, {Component} from "react";

class Hi extends Component{
    constructor(){
 super()
    this.state ={
       count:0
    }
    }
    handleclick=()=>{
        this.setState({
           count:this.state.count+1
        })
    }

    render(){
        return<>
        <h1>count - {this.state.count}  </h1>
        <Priyanshu increment={this.handleclick}/>
        </>
    }
}

 class Priyanshu extends Component{
    render(){
        return(<button onClick={this.props.increment}>increment</button> )
    }
}
export  default Hi;
// export default priyanshu;
