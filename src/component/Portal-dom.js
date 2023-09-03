// import React from 'react'
// import ReactDOM from 'react-dom'

//  function Portaldom() {
//   return ReactDOM.createPortal (
//     <div>
//          <h1>Hi my name is priyanshu kuamr </h1>

//     </div>,
//   document.getElementById("Portal"))
// }
// export default Portaldom
// PortalComponent.js

import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  const portalRoot = document.getElementById('Portal');
  return ReactDOM.createPortal(children, portalRoot);
};

export default PortalComponent;
