// const axios = require("axios");
// require("dotenv").config();

// const BACKEND_URL = process.env.BACKEND_API;

const registerUser = async (user) => {
  console.log("Mocked Register");
  return Promise.resolve({
    data: {
      user,
      message: "Successful Registration",
    },
  });
};

const loginUser = async (user) => {
  console.log("mocked login");
  return Promise.resolve({
    data: {
      user: {
        firstName: "Nel",
        lastName: "Kal",
        address: "123 Main street",
        state: "Lagos",
        city: "Surulere",
        zipCode: "100001",
        email: user.email,
      },
      loggedIn: true,
      message: "Login Successful",
    },
  });
};

module.exports = {
  registerUser,
  loginUser,
};
