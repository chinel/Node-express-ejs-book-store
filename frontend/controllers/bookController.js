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

module.exports = { getBooksHandler };
