import React, { useReducer } from "react";

import { initialState, todoReducer } from "../reducers";

import TodoList from "./todoList";
import TodoForm from "./todoForm";

const TodoApp = (props) => {
    const [todo, dispatch] = useReducer(todoReducer, initialState);

    const addTask = (e) => {
        e.preventDefault();
        let payload = { item: e.target.task.value, completed: false, id: Date.now() }
        dispatch({type: "ADD_TASK", payload: payload});
    };

    const toggleTask = (task) => {
        dispatch({type: "TOGGLE_TASK", payload: task});
    };

    const clearComplete = (e) => {
        e.preventDefault();
        dispatch({type: "CLEAR_COMPLETE"});
    };

    return(
      <div className="todo-app-container">
          <TodoForm addTask={addTask} />
          <div className="button-wrapper">
              <button className="button" onClick={clearComplete}>Clear Completed</button>
          </div>
          <TodoList todoList={todo.todoList} toggleTask={toggleTask} />
      </div>
    );
};

export default TodoApp;
