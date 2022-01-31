import { combineReducers } from "redux";
import { checkSessionReducer } from './checkSessionReducer';
import { getPointsReducer } from "./getPointsReducer";
import questReducer from "./questReducer";

export const rootReducer = combineReducers({
  checkSessionReducer,
  questReducer,
  getPointsReducer,
})
