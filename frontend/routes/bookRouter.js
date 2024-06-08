const express = require("express");
const {
  getBooksHandler,
  getAddBookHandler,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooksHandler);
router.get("/addbook", getAddBookHandler);

module.exports = router;
