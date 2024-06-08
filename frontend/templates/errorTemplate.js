const { messages } = require("../utilities/utils");

const errorTemplate = (res, page, pageTitle, errors, message, body) => {
  const errResponse = errors.response;
  if (
    errResponse &&
    errResponse.data &&
    errResponse.data.error.message === "Authentication Failed"
  ) {
    res.render("login", {
      pageTitle: "Login",
      errors,
      message: messages.failed_login,
      body: "undefined",
    });
  } else {
    res.render(page, {
      pageTitle,
      errors,
      body,
      message,
    });
  }
};

module.exports = errorTemplate;
