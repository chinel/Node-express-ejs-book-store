const express = require("express");
const {
  getAuthorsHandler,
  deletAuthorHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthorsHandler);
router.delete("/:authorId", deletAuthorHandler);

module.exports = router;
