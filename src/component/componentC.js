import React from "react";
import { Userconsumer } from "./UserContext";
import {Userclass} from "../App";
function ComponentC() {
  return (
    <div>
      <Userconsumer>
        {(username) => {
          return (
            <Userclass.Consumer>
              {(userclass) => {
                return (
                  <div>
                    UserContext Name {username} class is {userclass}{" "}
                  </div>
                );
              }}
            </Userclass.Consumer>
          );
        }}
      </Userconsumer>
    </div>
  );
}
export default ComponentC;
