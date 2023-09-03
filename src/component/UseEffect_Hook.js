// import React, { useState, useEffect } from "react";

// function UseEffectHook() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }); // Adding [count] as dependency to re-run the effect when count changes

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>click {count} times</button>
//     </div>
//   );
// }

// export default UseEffectHook;
import React, { Component } from 'react'

export default class UseEffect_Hook extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count:0
    }
  }
  componentDidMount(){
    document.title=(`clicked ${this.state.count} times`)
  }
  componentDidUpdate(prev,prevState){
    document.title=(`clicked ${this.state.count} times`)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>click</button>
      </div>
    )
  }
}

