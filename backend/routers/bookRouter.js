const express = require("express");
const {
  getAllBooksHandler,
  getBookByIdHandler,
  postBookHandler,
  updateBookHandler,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getAllBooksHandler);

router.get("/:bookId", getBookByIdHandler);

router.post("/", postBookHandler);

router.put("/:bookId", updateBookHandler);

router.delete("/:bookId", (req, res, next) => {
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
