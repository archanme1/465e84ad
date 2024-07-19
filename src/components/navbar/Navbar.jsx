import Header from "../header/Header";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  return (
    <nav>
      <div className="left">
        <div className="logo">
          <Header />
          <span>(Speer-Dev-Test)</span>
        </div>
        <div className="logoRight">
          <Button component={Link} to="/" color="success">
            Home
          </Button>
          <Button component={Link} to="/logs" color="success">
            Logs
          </Button>
          <Button component={Link} to="/archives" color="success">
            Archives
          </Button>
        </div>
      </div>
      <div className="right">
        {currentUser.username ? (
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s"
              alt="archan"
            />
            <span>
              Howdy, <b>{currentUser.username}</b>
            </span>
            <Button
              component={Link}
              to="/profile"
              variant="contained"
              color="success"
            >
              My Profile
            </Button>
          </div>
        ) : (
          <div className="auth">
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="success"
            >
              Sign iN
            </Button>
          </div>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Button
            component={Link}
            to="/"
            color="success"
            onClick={() => setOpen((prev) => !prev)}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/logs"
            color="success"
            onClick={() => setOpen((prev) => !prev)}
          >
            Logs
          </Button>
          <Button
            component={Link}
            to="/archives"
            color="success"
            onClick={() => setOpen((prev) => !prev)}
          >
            Archives
          </Button>
          {currentUser.username ? (
            <div className="userMobile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s"
                alt="archan"
              />
              <span>
                Howdy, <b>{currentUser.username}</b>
              </span>
              <Button
                component={Link}
                to="/profile"
                variant="contained"
                color="success"
                onClick={() => setOpen((prev) => !prev)}
              >
                My Profile
              </Button>
            </div>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                color="success"
                onClick={() => setOpen((prev) => !prev)}
              >
                Sign iN
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
