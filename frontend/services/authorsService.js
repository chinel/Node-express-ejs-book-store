const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const headers = (req, methodValue) => {
  //You can use the approach if you want specific request methods
  // const method = methodValue || req.method.toLowerCase();
  // const validMethods = ["get", "post", "put", "delete", "patch"];

  // if (validMethods.includes(method)) {
  // axios.defaults.headers[method]["Authorization"] = req.headers.authorization;
  //}
  axios.defaults.headers.common["Authorization"] = req.headers.authorization;
};

const getAllAuthors = async (req) => {
  headers(req, "get");
  const result = await axios.get(BACKEND_URL + "/authors");
  return result;
};

module.exports = { getAllAuthors };
