const express = require("express");
const { getAuthorsHandler } = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthorsHandler);

module.exports = router;
