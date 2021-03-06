const initialState = {
    allTasks: []
};

const todo = state = (initialState, action) => {
    switch(action.type) {
        case "ADD_TASK":
            return { ... state, allTasks: [...state.allTasks, action.payload.newTask]};
            default:
                return state;
    }
};

export default todo