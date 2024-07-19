import { Box, Tooltip } from "@mui/material";
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

  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

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
            <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
              {emptyMessage}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
