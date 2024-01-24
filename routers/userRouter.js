const express = require("express");
const { registerUserHandler } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUserHandler);

router.post("/login", (req, res) => {});

module.exports = router;
