import React, { useState } from "react";
// This example is useState example which is count the value we are click the button

//  function UsestateHook() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={()=>setCount(count + 1)}>count {count}</button>
//     </div>
//   );
// }
// export default UsestateHook

// This example is prevState example

function UsestateHook() {
  const initialstate = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      count: {count}

      <button onClick={() => setCount(initialstate)}>resat</button>
      <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
      <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
      <button onClick={() => setCount(prevState => prevState + 10)}>Increment 10</button>
    </div>
  );
}
export default UsestateHook;
