import "../App.css";
import { FaCamera } from "react-icons/fa";

function Account() {
  return (
    <div className="container">

      <h2 className="accountHeading">Account Settings</h2>

      <div className="accountCard">

        <div className="profileSection">

          <div className="imageContainer">

            <img
              className="profileImage"
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="profile"
            />

            <div className="cameraIcon">
              <FaCamera />
            </div>

          </div>

          <div className="profileInfo">
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>

        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>

      </div>

    </div>
  );
}

export default Account;