const Book = require("../models/bookModel");

const BATCH_SIZE = 100;

const findBooks = async (obj, selectValues) => {
  return await Book.find(obj)
    .select(selectValues)
    .populate("author")
    .select(selectValues)
    .exec();
};

const findBook = async (obj, selectValues) => {
  return await Book.findOne(obj).populate("author").select(selectValues).exec();
};

const saveBook = async (newBook) => {
  return await newBook.save();
};

const updateBook = async (filter, update) => {
  return await Book.updateOne(filter, update).exec();
};

const deleteBook = async (obj) => {
  return await Book.deleteOne(obj).exec();
};

const updateBookMany = async (
  filter,
  update,
  options = { limit: BATCH_SIZE }
) => {
  let result, updatedCount;
  do {
    result = await Book.updateMany(filter, update, options);
    updatedCount += result.nModified;
  } while (result.nModified > 0);
  return result;
};

module.exports = {
  findBooks,
  findBook,
  saveBook,
  updateBook,
  deleteBook,
  updateBookMany,
};
