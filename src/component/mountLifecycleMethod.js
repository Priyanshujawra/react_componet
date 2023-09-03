import React, { Component } from 'react';

// class LifecycleExample extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component unmounted');
//   }

//   handleClick() {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default LifecycleExample;


// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { time: new Date() };
//     }

//     componentDidMount() {
//         this.timer = setInterval(
//             () => this.tick(),
//             1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//     tick() {
//         this.setState({
//             time: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Welcome to {this.props.title} !</h1>
//                 <h2>{this.state.time.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }
// export default Clock;


class Test extends Component {
    constructor(props)
    {
        super(props);
        this.state = { hello : "World!" };
    }
    componentWillMount()
    {
        console.log("componentWillMount()");
    }
    componentDidMount()
    {
        console.log("componentDidMount()");
    }
    changeState()
    {
        this.setState({ hello : "Geek!" });
    }
    render()
    {
        return (
            <div>
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
            <h2>
            <button onClick={this.changeState.bind(this)}>Press Here!</button>
            </h2>
            </div>);
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentWillUpdate()
    {
        console.log("componentWillUpdate()");
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate()");
    }
}
export default Test