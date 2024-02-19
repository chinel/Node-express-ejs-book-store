const express = require("express");
const { validateRegistration } = require("../validation/validation");
const { isEmpty, messages } = require("../utilities/utils");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { pagename: "Home" });
});

router.get("/about", (req, res) => {
  res.render("about", { pagename: "About" });
});

router.get("/register", (req, res) => {
  res.render("register", { pagename: "Register" });
});

router.post("/register", (req, res) => {
  const errors = validateRegistration(req.body);
  console.log("errors", errors);
  console.log("isEmpty", isEmpty(errors));
  if (isEmpty(errors)) {
    res.render("login", {
      pagename: "Login",
      message: messages.successful_registration,
    });
  } else {
    res.render("register", {
      pagename: "Register",
      errors,
      body: req.body,
      message: messages.failed_registration,
    });
  }
});

router.post("/login", (req, res) => {
  console.log("Loggin in");
  res.render("about", { pagename: "About" });
});

router.get("/login", (req, res) => {
  res.render("login", { pagename: "Login" });
});

module.exports = router;
