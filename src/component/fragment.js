import React, { Component } from "react";
import TableFragment from "./TableFragment";
class fragment extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <h1>priyanshu kumar</h1>
      //   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed praesentium odit suscipit soluta ratione provident mollitia, perspiciatis tempora! Quidem quasi explicabo ducimus esse, veritatis beatae quae quibusdam tempore cumque fugit!</p>
      // </React.Fragment>

      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <TableFragment />
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default fragment;
