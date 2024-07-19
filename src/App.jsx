import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import "./app.scss";
import Inboxes from "./pages/inboxes/Inboxes";
import Archives from "./pages/archives/Archives";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { callListData, singleCallListData } from "./lib/dataLoader";
import SingleCallPage from "./pages/singleCallPage/SingleCallPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: callListData,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/logs",
          element: <Inboxes />,
          loader: callListData,
        },
        {
          path: "/logs/:id",
          element: <SingleCallPage />,
          loader: singleCallListData,
        },
        {
          path: "/archives",
          element: <Archives />,
          loader: callListData,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
