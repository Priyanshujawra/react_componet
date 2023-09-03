import React, { useState } from "react";
import Second from "./first";
import "./style-box.css";

export default function second() {
  const [isnextvalue, setisnext] = useState(true);
  const [squres, setstate] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (calculateWinner(squres) || squres[i]) {
      return;
    }
    let nextSquares = squres.slice(0);
    if (isnextvalue) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setstate(nextSquares);
    setisnext(!isnextvalue);
  }
  const winner = calculateWinner(squres);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    console.log(isnextvalue)
    status = "Next player: " + (isnextvalue ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="box">
        <div className="first-row">
          <Second value={squres[0]} onsqureschange={() => handleclick(0)} />
          <Second value={squres[1]} onsqureschange={() => handleclick(1)} />
          <Second value={squres[2]} onsqureschange={() => handleclick(2)} />
        </div>
        <div className="second-row">
          <Second value={squres[3]} onsqureschange={() => handleclick(3)} />
          <Second value={squres[4]} onsqureschange={() => handleclick(4)} />
          <Second value={squres[5]} onsqureschange={() => handleclick(5)} />
        </div>
        <div className="third-row">
          <Second value={squres[6]} onsqureschange={() => handleclick(6)} />
          <Second value={squres[7]} onsqureschange={() => handleclick(7)} />
          <Second value={squres[8]} onsqureschange={() => handleclick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
