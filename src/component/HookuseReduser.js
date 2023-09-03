import React, { useReducer, useState } from "react";

let initialize = {
  firstcount: 0,
  value: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstcount: state.firstcount + state.value };
    case "increment":
      return { ...state, firstcount: state.firstcount + state.value };
    case "decrement":
      return { ...state, firstcount: state.firstcount - 1 };
    case "changeValue":
      return { ...state, value: action.payload };
    case "reset":
      return { ...state, firstcount: initialize.firstcount };
    default:
      return state;
  }
};


function HookuseReducer() {
  const [state, dispatch] = useReducer(reducer, initialize);
  const [selectedValue, setSelectedValue] = useState("1"); // Add state to manage selected value

  const handleValueChange = (event) => {
    const newValue = parseInt(event.target.value);
    setSelectedValue(newValue);
    dispatch({ type: "changeValue", payload: newValue });
  };

  return (
    <div>
      <h1 className="text-4xl p-4">count - {state.firstcount}</h1>
      <button
        className="border border-blue-400 bg-blue-500 text-white rounded p-2 ml-2"
        onClick={() => dispatch({ type: "increment1" })}
      >
        Increment
      </button>
      <button
        className="border border-blue-400 bg-blue-500 text-white rounded p-2 ml-2"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <select
        className="bg-blue-500 text-white"
        value={selectedValue}
        onChange={handleValueChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button
        className="border border-blue-400 bg-blue-500 text-white rounded p-2 ml-2"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="border border-blue-400 bg-blue-500 text-white rounded p-2 ml-2"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default HookuseReducer;
