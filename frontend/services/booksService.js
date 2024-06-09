const axios = require("axios");
require("dotenv").config();

const BACKEND_URL = process.env.BACKEND_API;

const headers = (req, methodValue) => {
  //You can use the approach if you want specific request methods
  // const method = methodValue || req.method.toLowerCase();
  // const validMethods = ["get", "post", "put", "delete", "patch"];

  // if (validMethods.includes(method)) {
  // axios.defaults.headers[method]["Authorization"] = req.headers.authorization;
  //}
  axios.defaults.headers.common["Authorization"] = req.headers.authorization;
};

const getAllBooks = async (req) => {
  headers(req);
  const result = await axios.get(BACKEND_URL + "/books");
  return result;
};

const addBook = async (req) => {
  const book = req.body;
  headers(req);
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
  headers(req, "put");
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
  headers(req);
  const result = await axios.get(BACKEND_URL + "/books/" + req.params.bookId);
  return result;
};

module.exports = { getAllBooks, addBook, getBook, editBook };
