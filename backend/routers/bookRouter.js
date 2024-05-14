const express = require("express");
const {
  getAllBooksHandler,
  getBookByIdHandler,
  postBookHandler,
  updateBookHandler,
  deleteBookHandler,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooksHandler);

router.get("/:bookId", getBookByIdHandler);

router.post("/", postBookHandler);

router.put("/:bookId", updateBookHandler);

router.delete("/:bookId", deleteBookHandler);

module.exports = router;
