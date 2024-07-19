import mockApiRequest from "./mockApiRequest";

//  Retrieves the call list data from the API.
export const callListData = async () => {
  const res = await mockApiRequest.get("/");
  return res.data;
};

//  Retrieves single call list data from the API.
export const singleCallListData = async ({ request, params }) => {
  const res = await mockApiRequest.get("/" + params.id);
  return res.data;
};
