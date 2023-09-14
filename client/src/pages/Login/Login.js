import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "../Forms.scss";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/auth";

const WHITELISTED_EMAIL = "test@abc.com";
const WHITELISTED_PASSWORD = "123";

function Login() {
  const { authError } = useSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === WHITELISTED_EMAIL && password === WHITELISTED_PASSWORD) {
      const whitelisted_user_info = {
        email: WHITELISTED_EMAIL,
        name: "Guest User",
      };
      localStorage.setItem(
        "user_info",
        JSON.stringify({ result: whitelisted_user_info })
      );
      navigate("/insights");
    } else if (email !== "" && password !== "") {
      dispatch(signIn({ email, password }, navigate));
    }
  };

  return (
    <div className="screen-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder={WHITELISTED_EMAIL}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder={WHITELISTED_PASSWORD}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="error-text">{authError}</div>
          <button type="submit">Login</button>
          <p className="helper-text">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
