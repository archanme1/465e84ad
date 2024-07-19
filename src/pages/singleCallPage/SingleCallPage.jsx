import { useLoaderData } from "react-router-dom";
import { CardActionArea, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./singlecalpage.scss";
import { CallMade, CallReceived } from "@mui/icons-material";

const SingleCallPage = () => {
  const singleCallListData = useLoaderData();

  return (
    <div className="singleCallPage">
      <Card sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/2853432/pexels-photo-2853432.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b> CALL DETAILS</b>
            </Typography>

            <Typography variant="body1" color="text.primary" paragraph>
              <strong>Direction:</strong> {singleCallListData.direction}{" "}
              {singleCallListData.direction === "inbound" &&
              singleCallListData.call_type === "missed" ? (
                <CallReceived className="icon" style={{ color: "red" }} />
              ) : singleCallListData.direction === "inbound" ? (
                <CallReceived className="icon" style={{ color: "green" }} />
              ) : singleCallListData.direction === "outbound" ? (
                <CallMade className="icon" style={{ color: "green" }} />
              ) : null}
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
