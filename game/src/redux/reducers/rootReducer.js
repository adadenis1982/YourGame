import { combineReducers } from "redux";
import { checkSessionReducer } from './checkSessionReducer';
import { getPointsReducer } from "./getPointsReducer";

export const rootReducer = combineReducers({
  checkSessionReducer,
  getPointsReducer
})
