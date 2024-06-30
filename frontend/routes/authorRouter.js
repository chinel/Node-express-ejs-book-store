const express = require("express");
const {
  getAuthorsHandler,
  deleteAuthorHandler,
  getEditAuthorHandler,
  editAuthorHandler,
  getAddAuthorHandler,
  addAuthorHandler,
} = require("../controllers/authorController");

const router = express.Router();

router.get("/", getAuthorsHandler);
router.get("/addauthor", getAddAuthorHandler);
router.post("/addauthor", addAuthorHandler);
router.delete("/:authorId", deleteAuthorHandler);
router.get("/:authorId", getEditAuthorHandler);
router.post("/:authorId", editAuthorHandler);

module.exports = router;
