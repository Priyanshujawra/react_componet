// import React, { PureComponent , Component} from 'react'

//  class PureComponentFirst extends PureComponent {

//   render() {
//     const {name,age}=this.props
//     return (
//       <div>
//         <h1>Name: {name}</h1>
//         <h1>Age: {age}</h1>
//       </div>
//     )
//   }
// }

//  class PureComponentsecond extends Component {
// constructor(props){
//     super(props)
//     this.state={
//         name:'priyanshu',
//         age:20,
//     }
// }
//   render() {
//     const person = { name: 'Jane Smith', age: 30 };
//     return (
//       <div>
//         <h1>Hi Welcome On Priyanshu web Application</h1>
//          <PureComponentFirst name={person.name} age={person.age}/>
//       </div>
//     )
//   }
// }

// export default PureComponentsecond

import React, { PureComponent } from 'react'


export default class PureComponentset extends PureComponent {

  render() {
    console.log("Pure component");
    return (
      <div>
        PureComponent class {this.props.name}
      </div>
    )
  }
}
