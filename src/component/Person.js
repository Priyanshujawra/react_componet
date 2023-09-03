import React from 'react'

 function Person({person,key}) {
  return (
    <div>
     {key}  <h1>name is {person.name} and id is {person.id} </h1>
    </div>
  )
}
export default Person