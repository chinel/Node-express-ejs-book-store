const express = require("express");
const { postAuthorHandler } = require("../controllers/authorController");

const router = express.Router();

router.post("/", postAuthorHandler);

module.exports = router;
