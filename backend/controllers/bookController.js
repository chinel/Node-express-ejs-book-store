const { default: mongoose } = require("mongoose");
const {
  findBooks,
  findBook,
  saveBook,
  updateBook,
  deleteBook,
} = require("../db/bookDb");
const Book = require("../models/bookModel");
const errorTemplate = require("../templates/errorTemplate");
const successsTemplate = require("../templates/successTemplate");
const { messages } = require("../utils/utils");

const getAllBooksHandler = async (req, res) => {
  try {
    const books = await findBooks({}, "-__v");
    successsTemplate(res, books, messages.books_found, 200);
  } catch (error) {
    errorTemplate(res, error, error.message);
  }
};

const getBookByIdHandler = async (req, res) => {
  try {
    const book = await findBook({ _id: req.params.bookId }, "-__v");
    if (!book) {
      throw new Error(messages.book_not_found);
    } else {
      successsTemplate(res, book, messages.book_found, 200);
    }
  } catch (error) {
    errorTemplate(res, error, error.message);
  }
};

const postBookHandler = async (req, res) => {
  try {
    const book = new Book();
    const newBook = Object.assign(book, req.body);
    const getBook = await findBook(newBook, "-__v");
    if (getBook) {
      throw new Error(messages.book_exists);
    } else {
      const savedBook = Object.assign(newBook, {
        _id: new mongoose.Types.ObjectId(),
      });

      const result = await saveBook(savedBook);

      successsTemplate(res, result, messages.book_saved, 201);
    }
  } catch (error) {
    errorTemplate(res, error, error.message || messages.book_not_saved);
  }
};

const updateBookHandler = async (req, res) => {
  try {
    const id = req.params.bookId;
    const data = req.body;
    const result = await updateBook({ _id: id }, data);
    successsTemplate(res, result, messages.book_updated, 200);
  } catch (error) {
    errorTemplate(res, error, error.message || messages.book_not_updated);
  }
};

const deleteBookHandler = async (req, res) => {
  try {
    const id = req.params.bookId;
    const result = await deleteBook({ _id: id });
    successsTemplate(res, result, messages.book_deleted, 200);
  } catch (error) {
    errorTemplate(res, error, error.message || messages.book_not_deleted);
  }
};

module.exports = {
  getAllBooksHandler,
  getBookByIdHandler,
  postBookHandler,
  updateBookHandler,
  deleteBookHandler,
};
