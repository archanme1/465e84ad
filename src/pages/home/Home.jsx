import Collection from "../../components/collection/Collection";

import "./home.scss";
import { callListData } from "../../lib/dummydata.js";

import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Button } from "@mui/material";

const callLists = callListData;

const Home = () => {
  const allCalls = useLoaderData();
  const { currentUser } = useContext(UserContext);
  const isUserAvailable = currentUser && currentUser.username;

  return (
    <div className="homePage">
      <div className="wrapper">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Efficiently Track and Archive Your Call Logs
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              explicabo suscipit cum eius, iure est nulla animi consequatur
              facilis id pariatur fugit quos laudantium temporibus dolor ea
              repellat provident impedit!
            </p>
          </div>
        </div>
        <div className="welcome">
          {isUserAvailable ? (
            <span>
              Welcome, <b>{currentUser.username}</b>
            </span>
          ) : (
            <span>
              Hey User, use "<b style={{ color: "green" }}>archanme1</b>" to
              login
            </span>
          )}
        </div>
        <Collection
          data={isUserAvailable ? allCalls.slice(0, 6) : callLists}
          emptyMessage="No calls found"
          collectionTitle={
            isUserAvailable
              ? "Your Recent Activity"
              : "Your Recent Logs Will Appear Here"
          }
          itemCount={6}
          tooltipMessage="Note: It only show you your last 6 recent activity!!"
          forHome={true}
        />
        {isUserAvailable ? (
          <Button
            component={Link}
            to="/logs"
            variant="contained"
            color="success"
          >
            VIEW ALL LOGS
          </Button>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="success"
            onClick={() => setOpen((prev) => !prev)}
          >
            Sign iN
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
