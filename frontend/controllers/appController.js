const {
  validateRegistration,
  validateLogin,
} = require("../validation/validation");
const { isEmpty, messages } = require("../utilities/utils");
const { registerUser, loginUser } = require("../services/userService");
const successsTemplate = require("../templates/successTemplate");
const errorTemplate = require("../templates/errorTemplate");

const getHomeHandler = (req, res) => {
  const session = req.session;
  const { message } = session;
  req.session.message = null;

  successsTemplate(res, "home", "Home", message || undefined, session);
};

const getAboutHandler = (req, res) => {
  const session = req.session;
  successsTemplate(res, "about", "About", null, session);
};

const logoutHandler = (req, res) => {
  req.session.destroy(null);
  res.redirect("/");
};

const getLoginHandler = (req, res) => {
  const session = req.session;
  successsTemplate(res, "login", "Login", undefined, session);
};

const getRegisterHandler = (req, res) => {
  const session = req.session;

  successsTemplate(res, "register", "Register", undefined, session);
};

const postRegistrationHandler = (req, res) => {
  const session = req.session;

  const errors = validateRegistration(req.body);
  if (isEmpty(errors)) {
    //call the backend
    registerUser(req.body)
      .then((result) => {
        console.log(result);

        successsTemplate(
          res,
          "login",
          "Login",
          messages.successful_registration,
          session
        );
      })
      .catch((err) => {
        errorTemplate(
          res,
          "register",
          "Register",
          err,
          err.response
            ? err.response.data.error.message
            : "Oops an error has occured",
          req.body
        );
      });
  } else {
    //if using try catch you can throw new Error("error message") and then the catch block will handle it
    //no need to add error template here if you want to but better to use error template
    errorTemplate(
      res,
      "register",
      "Register",
      errors,
      messages.failed_registration,
      req.body
    );
  }
};

const postLoginHandler = (req, res) => {
  const session = req.session;

  const errors = validateLogin(req.body);

  if (isEmpty(errors)) {
    //call the backend
    loginUser(req.body)
      .then((result) => {
        console.log(result);
        session.name = result.data.user.firstName;
        session.logged = result.data.loggedIn;
        session.token = result.data.token;
        session.message = result.data.message;

        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        errorTemplate(
          res,
          "login",
          "Login",
          err,
          err.response
            ? err.response.data.error.message
            : "Oops an error has occured",
          req.body
        );
      });
  } else {
    errorTemplate(
      res,
      "login",
      "Login",
      errors,
      messages.failed_login,
      req.body
    );
  }
};

module.exports = {
  postLoginHandler,
  postRegistrationHandler,
  getHomeHandler,
  getAboutHandler,
  logoutHandler,
  getLoginHandler,
  getRegisterHandler,
};
