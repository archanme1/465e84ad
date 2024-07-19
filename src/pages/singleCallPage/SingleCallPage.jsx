import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CardActionArea, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../contexts/UserContext";
import "./singlecalpage.scss";

const SingleCallPage = () => {
  const { currentUser } = useContext(UserContext);
  const singleCallListData = useLoaderData();

  return (
    <div className="singleCallPage">
      <Card sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={currentUser.avatar}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Call Details
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Username:</strong> {currentUser.username}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Direction:</strong> {singleCallListData.direction}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>From:</strong> {singleCallListData.from}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>To:</strong> {singleCallListData.to}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Via:</strong> {singleCallListData.via}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Duration:</strong> {singleCallListData.duration} seconds
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Call Type:</strong> {singleCallListData.call_type}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>ID:</strong> {singleCallListData.id}
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Created At:</strong>{" "}
              {new Date(singleCallListData.created_at).toLocaleString()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SingleCallPage;
