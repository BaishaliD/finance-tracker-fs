import * as actionType from "../const/actionsTypes";
import { getExpenseListOfCurrentUser } from "../../utils";

const getInitialState = () => {
  const expenseListForCurrentUser = getExpenseListOfCurrentUser();
  return { expenseList: expenseListForCurrentUser };
};
const initialState = getInitialState();

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_EXPENSE:
      const userEmail = JSON.parse(localStorage.getItem("user_info"))?.result
        ?.email;
      const updatedList = [...state.expenseList, { userEmail, ...action.data }];
      localStorage.setItem("expense_list", JSON.stringify(updatedList));
      return {
        ...state,
        expenseList: updatedList,
      };
    case actionType.DELETE_EXPENSE:
      const filteredList = state.expenseList.filter(
        (item) => item.id !== action.data
      );
      localStorage.setItem("expense_list", JSON.stringify(filteredList));
      return {
        ...state,
        expenseList: filteredList,
      };
    default:
      return state;
  }
};

export default expenseReducer;
