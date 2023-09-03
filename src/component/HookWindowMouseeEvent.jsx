// this is simple example class base mouse event to acesses of mouse direction x and y

// import React, { Component } from "react";
// export default class Windowmouseevent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       x: 0,
//       y: 0,
//     };
//   }
//   movehandler = (e) => {
//     this.setState({ x: e.clientX, y: e.clientY });
//   };
//   componentDidMount() {
//     window.addEventListener("mousemove", this.movehandler);
//   }

//   render() {
//     return (
//       <div>
//         x- {this.state.x}
//         y- {this.state.y}
//       </div>
//     );
//   }
// }

// with the hook method useeffect

import React, { useState, useEffect } from "react";

function HookWindowMouseeEvent() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const MouseEventHover = (e) => {
    console.log("mouse move");
    setPositionX(e.clientX);
    setPositionY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", MouseEventHover);

    return () => {
      console.log("component unmounted");
      window.removeEventListener("mousemove", MouseEventHover);
    };
  });
  return (
    <div>
      X-{positionX},Y-{positionY}
    </div>
  );
}

export default function Tooglemousehandler() {
  const [Toogle, setToogle] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setToogle(!Toogle);
        }}
      >
        Toogle Mousemove
      </button>
      {Toogle && <HookWindowMouseeEvent />}
    </div>
  );
}
