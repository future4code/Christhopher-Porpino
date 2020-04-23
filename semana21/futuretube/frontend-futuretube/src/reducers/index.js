import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./videos";
import user from "./users";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    user
  });
