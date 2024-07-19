import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Profile = () => {
  const { currentUser, logoutUser } = useContext(UserContext);

  // Handles the logout functionality
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <span>
              <b>Avatar:</b>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s"
                alt="user profile"
              />
            </span>
            <span>
              <b>Firstname:</b> {currentUser.firstname}
            </span>
            <span>
              <b>Username:</b> {currentUser.username}
            </span>
            <Button
              variant="contained"
              color="success"
              className="logout"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
