const express = require("express");
const {
  registerUserHandler,
  loginUserHandler,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUserHandler);

router.post("/login", loginUserHandler);

module.exports = router;
