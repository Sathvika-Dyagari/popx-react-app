import { useNavigate } from "react-router-dom";
import "../App.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container welcomeContainer">
      <div className="welcomeContent">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          className="createBtn"
          onClick={() => navigate("/register")}
        >
          Create Account
        </button>

        <button
          className="loginBtn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;