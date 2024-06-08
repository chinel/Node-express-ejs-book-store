const { getAllBooks } = require("../services/booksService");
const errorTemplate = require("../templates/errorTemplate");
const successsTemplate = require("../templates/successTemplate");
const { messages } = require("../utilities/utils");

const getBooksHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const books = await getAllBooks(req);
    console.log("books-->", books);
    successsTemplate(res, "books", "Books", null, session, {
      books: books.data.result,
    });
  } catch (errors) {
    console.log("errors-->", errors.response.data);
    errorTemplate(
      res,
      "books",
      "Books",
      errors,
      messages.get_books_failed,
      null
    );
  }
};

const getAddBookHandler = (req, res) => {
  const session = req.session;
  successsTemplate(res, "add-book", "Add a book", null, session);
};

module.exports = { getBooksHandler, getAddBookHandler };
