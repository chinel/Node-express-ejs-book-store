const Author = require("../models/authorModel");

const saveAuthor = async (newAuthor) => {
  return await newAuthor.save();
};

const findAuthors = async (obj, selectValues) => {
  return await Author.find(obj).select(selectValues).exec();
};

const findAuthor = async (obj, selectValues) => {
  return await Author.findOne(obj).select(selectValues).exec();
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
  findAuthor,
  updateAuthor,
  deleteAuthor,
};
