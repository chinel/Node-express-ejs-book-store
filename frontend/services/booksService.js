const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const getAllBooks = async (req) => {
  console.log("request-->", req.headers.authorization);
  axios.default.headers.get["Authorization"] = req.headers.authorization;
  return await axios.get(BACKEND_URL + "/books");
};

module.exports = { getAllBooks };
