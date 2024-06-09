const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const getAllBooks = async (req) => {
  axios.defaults.headers.get["Authorization"] = req.headers.authorization;
  const result = await axios.get(BACKEND_URL + "/books");
  return result;
};

const addBook = async (req) => {
  const book = req.body;
  axios.defaults.headers.post["Authorization"] = req.headers.authorization;

  const result = await axios.post(BACKEND_URL + "/books", {
    title: book.title,
    author: book.author,
    ISBN: book.ISBN,
    numberOfPages: book.numberOfPages,
    price: parseInt(book.price),
    yearPublished: book.yearPublished,
  });

  return result;
};

const editBook = async (req) => {
  const book = req.body;
  axios.defaults.headers.put["Authorization"] = req.headers.authorization;

  const result = await axios.put(BACKEND_URL + "/books/" + req.params.bookId, {
    title: book.title,
    author: book.author,
    ISBN: book.ISBN,
    numberOfPages: book.numberOfPages,
    price: parseInt(book.price),
    yearPublished: book.yearPublished,
  });

  return result;
};

const getBook = async (req) => {
  axios.defaults.headers.get["Authorization"] = req.headers.authorization;
  const result = await axios.get(BACKEND_URL + "/books/" + req.params.bookId);
  return result;
};

module.exports = { getAllBooks, addBook, getBook, editBook };
