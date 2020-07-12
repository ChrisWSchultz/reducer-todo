import React from "react";

import './todoCSS.css';

const TodoDetail = (props) => {

    const toggleTask = (event) => {
        event.preventDefault();
        props.toggleTask(props.task.id);
    }

    return(
        <div key={props.task.id} className={props.task.completed ? 'task complete' : 'task'} onClick={toggleTask}>
            <p className="task-detail">{ props.task.item }</p>
        </div>
    );
};

export default TodoDetail;
