import React,{useContext} from 'react'
import Componentc from './componentC'
import { Userconsumer } from "./UserContext";
import {Userclass} from "../App";
 function ComponentB() {
  const user = useContext(Userconsumer);
  const userclass = useContext(Userclass)
  return (
    <div>
      name-{user}-class-{userclass}
    <Componentc/>
    </div>
  )
}
export default ComponentB