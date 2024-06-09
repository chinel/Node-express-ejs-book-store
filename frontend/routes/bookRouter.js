const express = require("express");
const {
  getBooksHandler,
  getAddBookHandler,
  addBookHandler,
  getEditBookHandler,
  editBookHandler,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooksHandler);
router.post("/addbook", addBookHandler);
router.get("/addbook", getAddBookHandler);
router.get("/:bookId", getEditBookHandler);
router.post("/:bookId", editBookHandler);

module.exports = router;
