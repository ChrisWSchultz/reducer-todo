import React from "react";

const TodoForm = (props) => {
    return(
        <div>
            <form onSubmit={props.addTask}>
                <label>
                    Task:
                    <input name="task"/>
                </label>

                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm;
