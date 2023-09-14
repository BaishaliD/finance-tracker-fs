import "./Loggedout.scss";
import "./Loggedout.scss";

export default function Loggedout() {
  return (
    <div className="container">
      <h1>You are not logged in. Please login to access the service.</h1>
      <a href="/">
        <button>Log In</button>
      </a>
    </div>
  );
}
