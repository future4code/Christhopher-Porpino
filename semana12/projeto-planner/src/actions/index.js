import axios from 'axios';

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-christhopher"

const getTasksAction = (tasks) => {
    return {
        type: "GET_TASKS",
        payload: {
            tasks,
        }
    }
};

//Get Tasks
export const getTasks = () => async (dispatch) => {
    const headers = { headers: { "Content-Type": "application/json" } }
    const response = await axios.get(`${baseURL}`, headers)

    // console.log(response.data)
    
    dispatch(getTasksAction(response.data))
}

// axios.get = jest.fn(() => {
//     return {
//         data: {
//             tasks: [{
//                 id: "",
//                 text: "",
//                 day: "",               
//             }]
//         }
//     }
// })

// const response = axios.get()

// console.log(response.data.tasks)

//Create Task
export const createTask = (text, day) => async (dispatch) => {
    const createTaskInformation = {
        text,
        day
    }
    const headers = { headers: { "Content-Type": "application/json" } }

    try {
        await axios.post(`${baseURL}`, createTaskInformation, headers)
        console.log("deu certoo")
        dispatch(getTasks())

    } catch {
        window.alert("Erro criação")
    }

}

