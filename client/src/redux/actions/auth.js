import { AUTH, AUTH_FAILED } from "../const/actionsTypes";
import * as api from "../../api/index";

export const loadUser = () => async (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem("user_info"));

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    navigate("/insights");
  } catch (err) {
    dispatch({
      type: AUTH_FAILED,
      data: err?.response?.data?.message
        ? err.response.data.message
        : "Something is not right. Please retry!",
    });
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    dispatch({
      type: AUTH_FAILED,
      data: err?.response?.data?.message
        ? err.response.data.message
        : "Something is not right. Please retry!",
    });
  }
};
