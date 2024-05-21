const express = require("express");
const {
  postAuthorHandler,
  getAuthorHandler,
  getAuthorsHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.post("/", postAuthorHandler);
router.get("/:authorId", getAuthorHandler);
router.get("/", getAuthorsHandler);

module.exports = router;
