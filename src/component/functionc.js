import React from 'react'

export default function functionc() {
   function handleclick(){
  console.log("clicked");
    }
  return (
    <div>
      <button onClick={handleclick}>click</button>
    </div>
  )
}
