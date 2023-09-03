// // count interval by class based component
// import React, { Component } from 'react'

// export default class HookcounterInterval extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          count:0
//       }
//     }
//     componentDidMount(){
//         this.interval = setInterval(this.tick, 1000);
//     }
//     tick = ()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }
//   render() {
//     return (
//       <div>
//         <h1 className=' text-center text-4xl text-sky-400 mt-4'>{this.state.count}</h1>
//       </div>
//     )
//   }
// }

// count interval by function based component with useEffect  hook

import React, { useState, useEffect } from "react";

function HookcounterInterval() {
  const [count, setcount] = useState(0);
  const tick =()=>{
     setcount(count+1)
  }
  useEffect(()=>{
    document.title=`interval ${count}`
  })
  useEffect(()=>{
    const interval = setInterval(tick,1000);
    return ()=>{
        clearInterval(interval)
    }
  })
  return (
    <div>
      <h1 className=" text-center text-4xl text-sky-400 mt-4">{count}</h1>
    </div>
  );
}

export default HookcounterInterval;
