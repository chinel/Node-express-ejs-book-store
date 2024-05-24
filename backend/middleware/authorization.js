require("dotenv").config;
const jwt = require("jsonwebtoken");
const errorTemplate = require("../templates/errorTemplate");
const { messages } = require("../utils/utils");

const auth = (req, res, next) => {
  try {
    //Bearer: XXXXXXXXXXXXXX
    const [, token] = req.headers.authorization.split(" "); //split on the space before the token
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    errorTemplate(res, error, messages.auth_failed);
  }
};

module.exports = auth;
