// BAse  Mock API request to fetch data from the API.

import axios from "axios";

const mockApiRequest = axios.create({
  baseURL: "https://aircall-backend.onrender.com/activities/",
});

export default mockApiRequest;
