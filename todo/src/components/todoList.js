import React from "react";
import TodoDetail from "./todoDetail";

const TodoList = (props) => {
    return(
        <div className="todo-list">
            {props.todoList.map((task) => {
                return(
                    <TodoDetail task={task} toggleTask={props.toggleTask}/>
                );
            })}
        </div>
    );
};

export default TodoList;
