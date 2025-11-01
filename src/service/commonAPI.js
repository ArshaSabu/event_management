import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody
  };

  try {
    const result = await axios(reqConfig);
    return result;
  } catch (err) {
    return err;
  }
};

export default commonAPI;
