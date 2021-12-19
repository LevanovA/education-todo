import {combineReducers} from "redux";
import {todoActionReducer} from "./todoActionReducer";

export const rootReducer = combineReducers({
    todoAction: todoActionReducer,
})