const express = require("express");
const {
  getAuthorsHandler,
  deleteAuthorHandler,
  getEditAuthorHandler,
  editAuthorHandler,
  getAddAuthorHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthorsHandler);
router.get("/addAuthor", getAddAuthorHandler);
router.delete("/:authorId", deleteAuthorHandler);
router.get("/:authorId", getEditAuthorHandler);
router.post("/:authorId", editAuthorHandler);

module.exports = router;
