import { Button } from "@mui/material";
import "./search.scss";
import { useState } from "react";

const Search = ({ onSearchCall }) => {
  const [searchCall, setSearchCall] = useState("");
  // console.log(searchCall);

  // handles the search operation.
  const handleSearch = () => {
    onSearchCall(searchCall);
  };

  return (
    <div className="search">
      <form>
        <input
          type="text"
          name="location"
          placeholder="Search for Calls..."
          onChange={(e) => setSearchCall(e.target.value)}
        />
        <Button
          className=""
          variant="contained"
          color="success"
          onClick={handleSearch}
        >
          <img src="/search.png" alt="" />
        </Button>
      </form>
    </div>
  );
};

export default Search;
