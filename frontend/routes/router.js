const express = require("express");
const {
  postLoginHandler,
  postRegistrationHandler,
} = require("../controllers/appController");
const router = express.Router();

router.get("/", (req, res) => {
  const session = req.session;
  const { message } = session;
  req.session.message = null;
  res.render("home", {
    pagename: "Home",
    session,
    message: message || undefined,
  });
});

router.get("/about", (req, res) => {
  const session = req.session;
  res.render("about", { pagename: "About", session });
});

router.get("/register", (req, res) => {
  res.render("register", { pagename: "Register" });
});

router.post("/register", postRegistrationHandler);

router.post("/login", postLoginHandler);

router.get("/login", (req, res) => {
  res.render("login", { pagename: "Login" });
});

router.get("/logout", (req, res) => {
  req.session.destroy(null);
  res.redirect("/");
});

module.exports = router;
