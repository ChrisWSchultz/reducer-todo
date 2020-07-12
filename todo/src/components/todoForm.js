import React from "react";

const TodoForm = (props) => {
    return(
        <div>
            <form className="form" onSubmit={props.addTask}>
                <input className="form-input" placeholder="Todo Task Name" name="task"/>

                <button className="button" type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TodoForm;
