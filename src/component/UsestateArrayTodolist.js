// import React, { useState } from 'react';

// function TodoList() {
//   // Declare a state variable 'todos' initialized with an empty array
//   const [todos, setTodos] = useState([]);

//   const addTodo = (newTodo) => {
//     // Use the spread operator to create a new array with the newTodo added
//     setTodos([...todos, newTodo]);
//   };

//   const removeTodo = (index) => {
//     // Use the filter method to create a new array without the todo at the given index
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <input
//           type="text"
//           placeholder="Add a new todo"
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               addTodo(e.target.value);
//               e.target.value = '';
//             }
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default TodoList;