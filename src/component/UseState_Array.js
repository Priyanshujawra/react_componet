import React, { useState } from 'react';



// import React from "react";
function UseStateArray() {
const [items, setState] = useState([]);
const clickhandler = () => {
  setState([
    ...items,
    {
      id: items.length,
      value: Math.floor(Math.random() * 10000) + 1,
    },
  ]);
};
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
))}
      </ul>
      <button onClick={clickhandler}>Add Number</button>
    </div>
  );
}
export default UseStateArray;
