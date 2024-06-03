const express = require("express");
const {
  postLoginHandler,
  postRegistrationHandler,
  getHomeHandler,
  logoutHandler,
  getAboutHandler,
  getLoginHandler,
  getRegisterHandler,
} = require("../controllers/appController");
const router = express.Router();

router.get("/", getHomeHandler);

router.get("/about", getAboutHandler);

router.get("/register", getRegisterHandler);

router.post("/register", postRegistrationHandler);

router.post("/login", postLoginHandler);

router.get("/login", getLoginHandler);

router.get("/logout", logoutHandler);

module.exports = router;
