import { useNavigate } from "react-router-dom";
import "../App.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container welcomeContainer">
      <div className="welcomeContent">
        <h1>Welcome to PopX</h1>

        <p>
          Welcome to PopX. Create your account, manage your profile, and enjoy a smooth and simple user experience designed for you.
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