import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import "../Forms.scss";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/auth";

function Register() {
  const { authError } = useSelector(({ auth }) => auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && password !== "") {
      dispatch(signUp({ name, email, password }, navigate));
    }
  };

  return (
    <div className="screen-container">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autocomplete="new-password"
            />
          </div>
          <div className="error-text">{authError}</div>
          <button type="submit">Register</button>
          <p className="helper-text">
            Already have an account? <a href="/">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
