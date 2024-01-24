const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Successful - GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get("/:id", (req, res, next) => {
  return res.status(200).json({
    message: "Successful - GET by Id",
    metadata: {
      id: req.params.id,
      method: req.method,
      hostname: req.hostname,
    },
  });
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  return res.status(201).json({
    message: "Successful - POST",
    metadata: {
      name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

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
