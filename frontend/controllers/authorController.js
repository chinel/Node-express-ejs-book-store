const { getAllAuthors } = require("../services/authorsService");
const errorTemplate = require("../templates/errorTemplate");
const successsTemplate = require("../templates/successTemplate");
const { messages } = require("../utilities/utils");

const getAuthorsHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const authors = await getAllAuthors(req);
    successsTemplate(res, "authors", "Authors", null, session, {
      authors: authors.data.result,
    });
  } catch (errors) {
    errorTemplate(
      res,
      "authors",
      "Authors",
      errors,
      messages.get_authors_failed,
      null
    );
  }
};

module.exports = { getAuthorsHandler };
