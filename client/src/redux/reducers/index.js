import { combineReducers } from "redux";
import auth from "./auth";
import income from "./incomes";
import expense from "./expenses";
export const reducers = combineReducers({ auth, income, expense });
