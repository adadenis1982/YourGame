import { combineReducers } from "redux";
import { checkSessionReducer } from './checkSessionReducer';
import questReducer from "./questReducer";

export const rootReducer = combineReducers({
  checkSessionReducer,
  questReducer
})
