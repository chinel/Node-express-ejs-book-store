const Book = require("../models/bookModel");

const findBooks = async (obj, selectValues) => {
  return await Book.find(obj).select(selectValues).exec();
};

const findBook = async (obj, selectValues) => {
  return await Book.findOne(obj).select(selectValues).exec();
};

const saveBook = async (newBook) => {
  return await newBook.save();
};

const updateBook = async (filter, update) => {
  return await Book.updateOne(filter, update);
};

module.exports = {
  findBooks,
  findBook,
  saveBook,
  updateBook,
};
