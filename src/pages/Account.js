 import "../App.css";
import { FaCamera } from "react-icons/fa";
import profileImg from "./image.jpeg";

function Account() {
  return (
    <div className="container">

      <h2 className="accountHeading">Account Settings</h2>

      <div className="accountCard">

        <div className="profileSection">

          <div className="imageContainer">

            <img
              className="profileImage"
              src={profileImg}
              alt="profile"
            />

            <div className="cameraIcon">
              <FaCamera />
            </div>

          </div>

          <div className="profileInfo">
            <h3>Sathvika Dyagari</h3>
            <p>sathvika@gmail.com</p>
          </div>

        </div>

        <p className="description">
          I am a motivated and detail-oriented fresher who enjoys learning new technologies and building responsive web applications using React.
        </p>

      </div>

    </div>
  );
}

export default Account;