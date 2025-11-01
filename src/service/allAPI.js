import commonAPI from "./commonAPI";
import BASEURL from "./serverURL";

// Register new user (POST)
export const registerUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/users`, reqBody);
};

// Login existing user (GET by email)
export const loginUserAPI = async (email) => {
  return await commonAPI("GET", `${BASEURL}/users?email=${email}`, {});
};
