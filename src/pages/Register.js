import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Create your PopX account</h1>

      <label>
        Full Name<span className="required">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter full name"
      />

      <label>
        Phone Number<span className="required">*</span>
      </label>
      <input
        type="text"
        placeholder="Enter phone number"
      />

      <label>
        Email Address<span className="required">*</span>
      </label>
      <input
        type="email"
        placeholder="Enter email address"
      />

      <label>
        Password<span className="required">*</span>
      </label>
      <input
        type="password"
        placeholder="Enter password"
      />

      <label>Company Name</label>
      <input
        type="text"
        placeholder="Enter company name"
      />

      <div className="radioGroup">
        <p>
          Are you an Agency?
          <span className="required">*</span>
        </p>

        <label className="radioOption">
          <input
            type="radio"
            name="agency"
            defaultChecked
          />
          Yes
        </label>

        <label className="radioOption">
          <input
            type="radio"
            name="agency"
          />
          No
        </label>
      </div>

      <button
        className="createBtn"
        onClick={() => navigate("/account")}
      >
        Create Account
      </button>
    </div>
  );
}

export default Register;