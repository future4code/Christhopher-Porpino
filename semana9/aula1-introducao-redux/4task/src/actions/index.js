export const addTaskAction = newTask => {
    return {
        type: "ADD_TASK"
        payload: {
            newTask: newTask
        }
    };
};

export const createNewTask = (name) => {
    return {
        type: "CREATE_NEW_TASK",
        payload: {
            name: name
        }
    };
};

export const doneTask = (id) => {
    return {
        type: "DONE_TASK",
        payload: {
            id: id
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: {
            id: id
        }
    };
};

export const markAllTasks = () => {
    return {
        type: "MARK_ALL_TASKS",
    };
};