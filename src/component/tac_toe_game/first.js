import React from "react";
export default function first({value,onsqureschange}) {

  return (
    <React.Fragment>
      <button className="child-box" onClick={onsqureschange}>
        {value}
      </button>
    </React.Fragment>
  );
}
