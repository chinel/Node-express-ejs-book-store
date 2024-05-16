const Author = require("../models/authorModel");

const saveAuthor = async (newAuthor) => {
  return await newAuthor.save();
};

const findAuthors = async (obj, selectValues) => {
  return await Author.find(obj).populate("book").select(selectValues).exec();
};

const findAuthorById = async (obj, selectValues) => {
  return await Author.findOne(obj).populate("book").select(selectValues).exec();
};

const updateAuthor = async (filter, update) => {
  return await Author.updateOne(filter, update).exec();
};

const deleteAuthor = async (obj) => {
  return await Author.deleteOne(obj).exec();
};

module.exports = {
  saveAuthor,
  findAuthors,
  findAuthorById,
  updateAuthor,
  deleteAuthor,
};
