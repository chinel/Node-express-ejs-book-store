const express = require("express");
const {
  postAuthorHandler,
  getAuthorHandler,
  getAuthorsHandler,
  updateAuthorHandler,
  deleteAuthorHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.post("/", postAuthorHandler);
router.get("/:authorId", getAuthorHandler);
router.get("/", getAuthorsHandler);
router.put("/:authorId", updateAuthorHandler);
router.delete("/:authorId", deleteAuthorHandler);

module.exports = router;
