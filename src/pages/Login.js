import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email !== "" && password !== "";

  return (
    <div className="container">
      <div className="welcomeContent">
        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className={isFormFilled ? "createBtn" : "grayBtn"}
          disabled={!isFormFilled}
          onClick={() => {
            if (isFormFilled) {
              navigate("/account");
            }
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;