const { getAllAuthors } = require("../services/authorsService");
const {
  getAllBooks,
  addBook,
  getBook,
  editBook,
} = require("../services/booksService");
const errorTemplate = require("../templates/errorTemplate");
const successsTemplate = require("../templates/successTemplate");
const { messages } = require("../utilities/utils");

const getBooksHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const books = await getAllBooks(req);
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

const getAddBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const authors = await getAllAuthors(req);

    successsTemplate(res, "add-book", "Add a book", null, session, {
      authors: authors.data.result,
    });
  } catch (errors) {
    errorTemplate(
      res,
      "add-book",
      "Add a book",
      errors,
      messages.get_book_failed,
      null
    );
  }
};

const addBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const authors = await getAllAuthors(req);
    const result = await addBook(req);
    successsTemplate(
      res,
      "add-book",
      "Add a book",
      messages.book_added,
      session,
      {
        authors: authors.data.result,
      }
    );
  } catch (err) {
    errorTemplate(
      res,
      "add-book",
      "Add a book",
      err,
      err.response
        ? err.response.data.error.message
        : "Oops an error has occured",
      req.body
    );
  }
};

const getEditBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const authors = await getAllAuthors(req);
    const book = await getBook(req);

    successsTemplate(res, "edit-book", "Edit book", null, session, {
      authors: authors.data.result,
      body: book.data.result,
    });
  } catch (errors) {
    console.log(errors.response.data);
    errorTemplate(
      res,
      "edit-book",
      "Edit book",
      errors,
      messages.get_book_failed,
      null
    );
  }
};

const editBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const authors = await getAllAuthors(req);
    const result = await editBook(req);
    const book = await getBook(req);

    successsTemplate(
      res,
      "edit-book",
      "Edit a book",
      messages.book_updated,
      session,
      {
        authors: authors.data.result,
        body: book.data.result,
      }
    );
  } catch (err) {
    errorTemplate(
      res,
      "edit-book",
      "Edit a book",
      err,
      err.response
        ? err.response.data.error.message
        : "Oops an error has occured",
      req.body
    );
  }
};

module.exports = {
  getBooksHandler,
  getAddBookHandler,
  addBookHandler,
  getEditBookHandler,
  editBookHandler,
};
