import React, { Component } from 'react'

 class FormHandling extends Component {
  constructor(){
    super();
    this.state ={
      Name:""
    }
  }
  clickhandler=(e)=>{
    // console.log(e.target.value)
    this.setState({
       Name: e.target.value
    })

  }
  render() {
    return (
      <div>
           <form>
            <label htmlFor="">name</label>
            <input type="text" onChange={this.clickhandler}/>
            <button>submit</button>
           </form>
           <div>
            {this.state.Name}
           </div>
      </div>
    )
  }
}
export default FormHandling;