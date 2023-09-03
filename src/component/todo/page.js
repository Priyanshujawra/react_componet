import React, { useState } from "react";
let nextid = 0;
function Page() {
  const [name, setname] = useState("");
  const [state, setState] = useState([]);
  function handlclick() {
    setState([...state, { id: nextid++, name: name }]);
    setname("");
  }
  function Deletehandle(id) {
    const updatedState = state.filter((item) => item.id !== id);
    setState(updatedState);
  }
  return (
    <div className=" flex flex-col items-center flex-wrap ">
      <div className=" hi flex items-center flex-col">
        <div>
          <span class="block text-sm font-medium text-slate-700">Add Todo</span>
        </div>
        <div className=" flex  mt-3">
        <input
          className=" block w-52 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 mr-3 "
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <button
          onClick={handlclick}
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add
        </button>
        </div>
      </div>
      <div className=" flex w-64 m-3">
        <ul>
          {state.map((item) => (
            <React.Fragment key={item.id}>
              <li>{item.name}</li>
              <button
                onClick={() => Deletehandle(item.id)}
                className=" bg-red-600  text-white p-1 mt-1 font-normal "
              >
                Delete
              </button>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Page;
