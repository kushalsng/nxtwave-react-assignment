import { combineReducers } from "redux";
import { resourceReducer } from "./resource/reducers";

export const reducer = combineReducers({
  resource: resourceReducer
})