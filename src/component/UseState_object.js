import React from 'react'

 function UseStateobject() {
    const [state, setState] = React.useState({firstname:'',lastname:''})

  return (
    <div>
       <form>
        <input type="text" value={state.firstname} onChange={e=>setState({...state, firstname: e.target.value})}/>
        <input type="text" value={state.lastname} onChange={e=>setState({...state, lastname: e.target.value})}/>
       </form>
       <li>your Firstname is {state.firstname}</li>
       <li>your Lastname is {state.lastname}</li>
    </div>
  )
}
export default UseStateobject