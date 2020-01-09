import { combineReducers } from "redux";
import tasks from "./todo";

const rootReducer = combineReducers({
    tasks: tasks,
});

export default rootReducer;