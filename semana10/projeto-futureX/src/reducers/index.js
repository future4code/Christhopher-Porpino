import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import trips from "./allTrips";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    trips
  });
