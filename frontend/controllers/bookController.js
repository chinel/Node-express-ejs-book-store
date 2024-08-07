const { getAllAuthors } = require("../services/authorsService");
const {
  getAllBooks,
  addBook,
  getBook,
  editBook,
  deleteBook,
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
    const authorsData = authors.data.result;
    session.authors = authorsData;

    successsTemplate(res, "add-book", "Add a book", null, session, {
      authors: authorsData,
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
  let authors;
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const getAuthors = await getAllAuthors(req);
    authors = session.authors ? session.authors : getAuthors.data.result;
    const result = await addBook(req);
    successsTemplate(
      res,
      "add-book",
      "Add a book",
      messages.book_added,
      session,
      {
        authors,
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
      req.body,
      {
        authors,
      }
    );
  }
};

const getEditBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;
    const getAuthors = await getAllAuthors(req);
    authors = session.authors ? session.authors : getAuthors.data.result;
    const book = await getBook(req);

    successsTemplate(res, "edit-book", "Edit book", null, session, {
      authors: authors,
      body: book.data.result,
    });
  } catch (errors) {
    console.log(errors);
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
    const getAuthors = await getAllAuthors(req);
    authors = session.authors ? session.authors : getAuthors.data.result;
    const result = await editBook(req);
    const book = await getBook(req);

    successsTemplate(
      res,
      "edit-book",
      "Edit book",
      messages.book_updated,
      session,
      {
        authors,
        body: book.data.result,
      }
    );
  } catch (err) {
    errorTemplate(
      res,
      "edit-book",
      "Edit book",
      err,
      err.response
        ? err.response.data.error.message
        : "Oops an error has occured",
      req.body
    );
  }
};

const deleteBookHandler = async (req, res) => {
  try {
    const session = req.session;
    req.headers.authorization = "Bearer " + session.token;

    const result = await deleteBook(req);

    return res.json({ messages: messages.book_deleted, data: result });
  } catch (err) {
    return res.json({ error: true, messages: messages.book_delete_failed });
  }
};

module.exports = {
  getBooksHandler,
  getAddBookHandler,
  addBookHandler,
  getEditBookHandler,
  editBookHandler,
  deleteBookHandler,
};
