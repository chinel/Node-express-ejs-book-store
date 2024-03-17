const {
  validateRegistration,
  validateLogin,
} = require("../validation/validation");
const { isEmpty, messages } = require("../utilities/utils");
const { registerUser, loginUser } = require("../services/userService");

const postRegistrationHandler = (req, res) => {
  const errors = validateRegistration(req.body);
  if (isEmpty(errors)) {
    //call the backend
    registerUser(req.body)
      .then((result) => {
        console.log(result);
        res.render("login", {
          pagename: "Login",
          message: messages.successful_registration,
        });
      })
      .catch((err) => {
        res.render("register", {
          pagename: "Register",
          body: req.body,
          message: err.response
            ? err.response.data.error.message
            : "Oops an error has occured",
        });
      });
  } else {
    res.render("register", {
      pagename: "Register",
      errors,
      body: req.body,
      message: messages.failed_registration,
    });
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
        console.log(err.response);
        res.render("login", {
          pagename: "Login",
          body: req.body,
          message: err.response
            ? err.response.data.error.message
            : "Oops an error has occured",
        });
      });
  } else {
    res.render("login", {
      pagename: "Login",
      errors,
      body: req.body,
      message: messages.failed_login,
    });
  }
};

module.exports = {
  postLoginHandler,
  postRegistrationHandler,
};
