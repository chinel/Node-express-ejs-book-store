const {
  getAllAuthors,
  deleteAuthor,
  getAuthor,
} = require("../services/authorsService");
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

const deleteAuthorHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const result = await deleteAuthor(req);

    return res.json({ messages: messages.author_deleted, data: result });
  } catch (error) {
    return res.json({ error: true, messages: messages.author_delete_failed });
  }
};

const getEditAuthorHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;

    const author = await getAuthor(req);
    successsTemplate(res, "edit-author", "Edit author", null, session, {
      body: author.data.result,
    });
  } catch (errors) {
    errorTemplate(
      res,
      "edit-author",
      "Edit Author",
      errors,
      messages.get_author_failed,
      null
    );
  }
};

module.exports = {
  getAuthorsHandler,
  deleteAuthorHandler,
  getEditAuthorHandler,
};
