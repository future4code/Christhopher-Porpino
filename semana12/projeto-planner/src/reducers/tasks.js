const initialState = {
    allTasks: [],
    selectIdTask: "",
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASKS":
            // console.log(action.payload.tasks)
            return { ...state, allTasks: action.payload.tasks}
        default:
            return state
    }
}

export default tasks;