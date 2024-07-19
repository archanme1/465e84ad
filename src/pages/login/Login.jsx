import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./login.scss";
import { Button } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { loginUser } = useContext(UserContext);

  const usernameRef = useRef();

  const navigate = useNavigate();

  // Handle the form submission by validating the username, logging and navigating to the "/" if the username is valid.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;

    setLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (username === "archanme1") {
        loginUser({ username });
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <div className="logo">
            <p>Login to</p>
            <Header />
          </div>
          <input
            ref={usernameRef}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Button
            onClick={handleSubmit}
            disabled={loading}
            variant="contained"
            color="success"
          >
            Sign IN
          </Button>
          {error && <span>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
