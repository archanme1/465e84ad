import { Link, useRevalidator } from "react-router-dom";
import {
  Archive,
  CallMade,
  CallReceived,
  ForwardOutlined,
} from "@mui/icons-material";
import { dateConverter } from "../../utils/dateConverter";
import mockApiRequest from "../../lib/mockApiRequest.js";
import "./card.scss";

const Card = ({ call, forHome }) => {
  const revalidator = useRevalidator();

  // Toggles the archive status of a call.
  const handleToggleArchiveCall = async () => {
    try {
      await mockApiRequest.patch(`/${call.id}`, {
        is_archived: !call.is_archived,
      });
      revalidator.revalidate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="notification">
      <div className="detailsLeft">
        <div className="left">
          {call.direction === "inbound" && call.call_type === "missed" ? (
            <CallReceived className="icon" style={{ color: "red" }} />
          ) : call.direction === "inbound" ? (
            <CallReceived className="icon" style={{ color: "green" }} />
          ) : call.direction === "outbound" ? (
            <CallMade className="icon" style={{ color: "green" }} />
          ) : null}
        </div>
        <Link to={`/logs/${call.id}`}>
          <div className="right">
            <div
              className={call.call_type === "missed" ? "number miss" : "number"}
            >
              {call.from} <ForwardOutlined fontSize="12px" />
              {call.to}
            </div>
            <div
              className={
                call.call_type === "missed" ? "message miss" : "message"
              }
            >
              {call.call_type}
            </div>
          </div>
        </Link>
      </div>
      <div className="detailsRight">
        <div className="time">{dateConverter(call.created_at)}</div>
        {!forHome && (
          <Archive
            className={!call.is_archived ? "icon archive" : "icon"}
            onClick={handleToggleArchiveCall}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
