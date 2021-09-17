import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./Component/Todo/TodoList";
import Clock from "./Component/Clock/Clock"
import Counter from "./Component/Counter/Counter"

  
var destination = document.querySelector("#container")
  
ReactDOM.render(
    <div>
        <Clock /> <br/><br/>
        <Counter/>  <br/><br/>
        <TodoList/> 
    </div>,
    destination
);