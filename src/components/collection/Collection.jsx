import { Tooltip } from "@mui/material";
import Card from "../card/Card";
import "./collection.scss";

const Collection = ({
  data,
  emptyMessage,
  collectionTitle = "Your Logs on Device",
  tooltipMessage,
  itemCount,
  forHome,
}) => {
  // To manipulate and display data accordinly to props passed
  const displayData = itemCount ? data.slice(0, itemCount) : data;

  return (
    <div className="container">
      <Tooltip title={<span>{tooltipMessage}</span>} className="title">
        <span className="title">{collectionTitle}</span>
      </Tooltip>
      <div className="collection">
        {displayData.length > 0 ? (
          displayData.map((call, index) => {
            return <Card call={call} key={index} forHome={forHome} />;
          })
        ) : (
          <div className="notfound">
            <h1>{emptyMessage}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
