import React, { Component } from 'react'
import axios from 'axios'
 class PostDataAPI extends Component {
    constructor(props) {
      super(props)

      this.state = {
         userId:'',
         Title:'',
         Body:'',
      }
    }
    changehandler = e =>{
       this.setState({[e.target.name]:e.target.value})
    }
    submithandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then((Response)=>{
            console.log(Response);
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    const {userId,Title,Body}=this.state
    return (
      <div>
        <form onSubmit={this.submithandler}>
            <input type="text" name='userId' onChange={this.changehandler} value={userId}/>
            <input type="text" name='Title' onChange={this.changehandler} value={Title}/>
            <input type="text" name='Body' onChange={this.changehandler} value={Body}/>
            <button>submit</button>
        </form>
      </div>
    )
  }
}

export default PostDataAPI
