import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// ---------------------- EVENTS ----------------------

// Add new event (User)
export const addEventAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/events`, reqBody);
};

// Get all events
export const getAllEventsAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/events`);
};

// Update event (Admin)
export const updateEventAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/events/${id}`, reqBody);
};

// Delete event (Admin)
export const deleteEventAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/events/${id}`);
};

// ---------------------- MESSAGES ----------------------

// Send message (User)
export const sendMessageAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/messages`, reqBody);
};

// Get all messages (Admin)
export const getMessagesAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/messages`);
};

// Delete message (Admin)
export const deleteMessageAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/messages/${id}`);
};
