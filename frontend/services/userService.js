const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const registerUser = async (user) => {
  const result = await axios.post(BACKEND_URL + "/register", {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    address: user.address,
    state: user.state,
    city: user.city,
    zipCode: user.zipCode,
  });

  return result;
};

const loginUser = async (user) => {
  const result = await axios.post(BACKEND_URL + "/login", {
    email: user.email,
    password: user.password,
  });

  return result;
};
module.exports = {
  registerUser,
  loginUser,
};
