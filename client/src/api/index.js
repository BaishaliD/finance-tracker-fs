import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user_info")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user_info")).token
    }`;
  }

  return req;
});

export const signIn = (data) => API.post("/users/signin", data);

export const signUp = (data) => API.post("/users/signup", data);
