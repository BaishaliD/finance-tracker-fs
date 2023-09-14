import * as actionType from "../const/actionsTypes";

const authReducer = (state = { authData: null, authError: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("user_info", JSON.stringify({ ...action?.data }));
      return { ...state, authError: null, authData: action.data };

    case actionType.AUTH_FAILED:
      return { ...state, authError: action.data };

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authError: null, authData: null };
    default:
      return state;
  }
};

export default authReducer;
