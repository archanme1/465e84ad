import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./layout.scss";

function Layout() {
  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

// Renders the layout for a protected route, requiring authentication.
function RequireAuth() {
  const { currentUser } = useContext(UserContext);

  const isUserAvailable = currentUser && currentUser.username;

  if (!isUserAvailable) {
    return <Navigate to="/" />;
  }

  return (
    <div className="app">
      <div className="nav">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export { Layout, RequireAuth };
