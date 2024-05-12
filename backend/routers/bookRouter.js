const express = require("express");
const {
  getAllBooks,
  getBookById,
  postBook,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:bookId", getBookById);

router.post("/", postBook);

router.put("/:id", (req, res, next) => {
  return res.status(200).json({
    message: "Successful - PUT by Id",
    metadata: {
      id: req.params.id,
      method: req.method,
      hostname: req.hostname,
    },
  });
});

router.delete("/:id", (req, res, next) => {
  return res.status(200).json({
    message: "Successful - DELETE by Id",
    metadata: {
      id: req.params.id,
      method: req.method,
      hostname: req.hostname,
    },
  });
});

module.exports = router;
