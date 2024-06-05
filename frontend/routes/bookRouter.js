const express = require("express");
const { getBooksHandler } = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooksHandler);

module.exports = router;
