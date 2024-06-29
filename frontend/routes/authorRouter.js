const express = require("express");
const {
  getAuthorsHandler,
  deleteAuthorHandler,
  getEditAuthorHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthorsHandler);
router.delete("/:authorId", deleteAuthorHandler);
router.get("/:authorId", getEditAuthorHandler);

module.exports = router;
