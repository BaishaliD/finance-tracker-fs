import * as actionType from "../const/actionsTypes";
import { getIncomeListOfCurrentUser } from "../../utils";

const getInitialState = () => {
  const incomeListForCurrentUser = getIncomeListOfCurrentUser();
  return { incomeList: incomeListForCurrentUser };
};

const initialState = getInitialState();

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INCOME:
      const userEmail = JSON.parse(localStorage.getItem("user_info"))?.result
        ?.email;
      const updatedList = [...state.incomeList, { userEmail, ...action.data }];
      localStorage.setItem("income_list", JSON.stringify(updatedList));
      return {
        ...state,
        incomeList: updatedList,
      };
    case actionType.DELETE_INCOME:
      const filteredList = state.incomeList.filter(
        (item) => item.id !== action.data
      );
      localStorage.setItem("income_list", JSON.stringify(filteredList));
      return {
        ...state,
        incomeList: filteredList,
      };
    default:
      return state;
  }
};

export default incomeReducer;
