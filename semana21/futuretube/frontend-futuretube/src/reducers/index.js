import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import videos from "./videos";
import user from "./users";
import videoDetails from "./videoDetails";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    videos,
    user,
    videoDetails
  });
