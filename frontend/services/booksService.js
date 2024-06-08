const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const getAllBooks = async (req) => {
  axios.defaults.headers.get["Authorization"] = req.headers.authorization;
  const result = await axios.get(BACKEND_URL + "/books");
  return result;
};

module.exports = { getAllBooks };
