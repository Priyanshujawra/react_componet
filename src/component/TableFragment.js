import React from 'react'

 function TableFragment() {
  return (
    // if we apply this approach so this warning is ouccer
    // surrogate-pairs.js:1 Warning: validateDOMNesting(...): <tr> cannot appear as a child of <table>. Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.
    // <div>

    //       <h1>priyanshu kumar</h1>
    //       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium odit suscipit soluta ratione provident mollitia, perspiciatis tempora! Quidem quasi explicabo ducimus esse, veritatis beatae quae quibusdam tempore cumque fugit!</p>

    // </div>


    // so we use React.Fragment
    <React.Fragment>
    <td>priyanshu kumar</td>
    <td>Lorem ipsum dolor</td>
  </React.Fragment>
  )
}
export default TableFragment