import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// Add new event (User)
export const addEventAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/events`, reqBody);
};

// Get all events
export const getAllEventsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/events`, {});
};



// Delete event (Admin)
export const deleteEventAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/events/${id}`, {});
};