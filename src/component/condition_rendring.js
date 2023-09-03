import React, { Component } from "react";

class condition_rendring extends Component {
  constructor() {
    super();
    this.state = {
      istrue: true,
      logintype:"user",
    };
  }
  render() {
    // condition_rendring methods
    // let meaage ;
    //  if (this.state.istrue) {
    //     meaage = <div> welcome prianshu</div>;
    //  } else {
    //   meaage = <div>thanks</div>;
    //  }
    //  return (<div>{meaage}</div>);

    // condition_rendring methods by turnery opreator
    // return this.state.istrue ? <div> welcome prianshu</div> : <div>thanks</div>;
    //  return this.state.istrue && <div> welcome prianshu</div>;

    //  switch case condition_rendring

    //  switch (this.state.istrue) {
    //    case true:
    //     return <div> welcome prianshu</div>;

    //    default:
    //     return <div>thanks</div>;

    //  }
    return (
      <div>
        <ShowMeassage usertype={this.state.logintype} islogin={this.state.istrue} />
        <MyComponent usertype={this.state.logintype} islogin={this.state.istrue}/>
      </div>
    );
  }
}
// it's advance method
const Userlogin = () => <div>welcome user </div>;

const Adminlogin = () => <div>welcome admin </div>;

const Notinservice = () => <div> please register our application </div>;

const ShowMeassage = ({ islogin, usertype }) => {
  return (
    <div>
      {islogin ? (
        usertype === "user" ? (
          <Userlogin />
        ) : (
          <Adminlogin />
        )
      ) : (
        <Notinservice />
      )}
    </div>
  );
};
// another methods
const componentsMap = {
   admin: <p>Welcome, admin!</p>,
   user: <p>Welcome, user!</p>,
   default: <p>Please log in to continue.</p>,
 };

 const MyComponent = ({ islogin, usertype }) => {
   const condition = islogin ? (usertype || 'default') : 'default';

   return <div>{componentsMap[condition]}</div>;
 };
export default condition_rendring;
