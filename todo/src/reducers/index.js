export const initialState = {
    todoList: [{item: 'Learn about reducers', completed: false, id: 3892987589}],
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, todoList: [...state.todoList, action.payload]};

        case 'TOGGLE_TASK':
            return {...state, todoList: state.todoList.map((task) => {
                    if(task.id === action.payload) {
                        return {item: task.item, completed: !task.completed, id: task.id}
                    } else {
                        return task;
                    }
                })
            };

        case 'CLEAR_COMPLETE':
            return {...state, todoList: state.todoList.filter(task => task.completed === false)};

        default:
            return state;
    }

};
