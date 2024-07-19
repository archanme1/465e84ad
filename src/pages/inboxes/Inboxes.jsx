import { useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import Collection from "../../components/collection/Collection";
import { callListData } from "../../lib/dummydata.js";
import { Button } from "@mui/material";
import Search from "../../components/search/Search.jsx";
import mockApiRequest from "../../lib/mockApiRequest";
import "./inboxes.scss";
import { Archive } from "@mui/icons-material";

const Inboxes = () => {
  const [searchCall, setSearchCall] = useState("");
  const revalidator = useRevalidator();

  const allCalls = useLoaderData();
  const nonArchivedCalls = allCalls.filter((call) => call.is_archived);

  // Filters the non-archived calls based on the search term.
  const filterCalls = () => {
    if (searchCall === "") {
      return nonArchivedCalls;
    } else {
      return nonArchivedCalls.filter(
        (call) =>
          call.to.toString().toLowerCase().includes(searchCall.toLowerCase()) ||
          call.from.toString().toLowerCase().includes(searchCall.toLowerCase())
      );
    }
  };

  const handleSearchCall = (e) => {
    setSearchCall(e);
  };

  // Asynchronously archives all posts and revalidate the path for optimistic ui change.
  const archiveAllPosts = async () => {
    try {
      await Promise.all(
        nonArchivedCalls.map((call) =>
          mockApiRequest.patch(`/${call.id}`, { is_archived: false })
        )
      );
      revalidator.revalidate();
    } catch (error) {
      console.log("Something went wronf");
    }
  };

  return (
    <div className="inboxes">
      <div className="archivesBtn">
        <Button variant="outlined" color="success" onClick={archiveAllPosts}>
          Archive All Logs
          <Archive />
        </Button>
        <Search onSearchCall={handleSearchCall} />
      </div>

      <Collection
        data={filterCalls()}
        collectionTitle="All Logs"
        emptyMessage="No Logs found"
        tooltipMessage="Note: It shows you all your logs!!"
      />
    </div>
  );
};

export default Inboxes;
