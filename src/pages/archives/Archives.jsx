import { Button } from "@mui/material";
import Collection from "../../components/collection/Collection";
import { callListData } from "../../lib/dummydata";
import Search from "../../components/search/Search";
import "./archives.scss";
import { useLoaderData, useRevalidator } from "react-router-dom";
import { useState } from "react";
import mockApiRequest from "../../lib/mockApiRequest";
import { Archive } from "@mui/icons-material";

const callLists = callListData;

const Archives = () => {
  const [searchCall, setSearchCall] = useState("");
  const allArchievedCalls = useLoaderData();
  const revalidator = useRevalidator();

  const archivedCalls = allArchievedCalls.filter((call) => !call.is_archived);

  // Filters the archived calls based on the search term.
  const filterCalls = () => {
    if (searchCall === "") {
      return archivedCalls;
    } else {
      return archivedCalls.filter(
        (call) =>
          call.to.toString().toLowerCase().includes(searchCall.toLowerCase()) ||
          call.from.toString().toLowerCase().includes(searchCall.toLowerCase())
      );
    }
  };

  const handleSearchCall = (e) => {
    setSearchCall(e);
  };

  // Asynchronously unarchives all posts and revalidate the path for optimistic ui change.
  const unArchiveAllPosts = async () => {
    console.log("hitting");
    try {
      await Promise.all(
        archivedCalls.map((call) =>
          mockApiRequest.patch(`/${call.id}`, { is_archived: true })
        )
      );
      revalidator.revalidate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="archives">
      <div className="archivesBtn">
        <Button variant="outlined" color="success" onClick={unArchiveAllPosts}>
          Unarchive All Logs
          <Archive />
        </Button>
        <Search onSearchCall={handleSearchCall} />
      </div>

      <Collection
        data={filterCalls()}
        collectionTitle="Archived Logs"
        tooltipMessage="Note: It shows you all your archived logs!!"
        emptyMessage="No Archives found"
      />
    </div>
  );
};

export default Archives;
