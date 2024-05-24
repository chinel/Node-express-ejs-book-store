const mongoose = require("mongoose");
const Author = require("../models/authorModel");
const errorTemplate = require("../templates/errorTemplate");
const {
  findAuthor,
  saveAuthor,
  findAuthors,
  updateAuthor,
  deleteAuthor,
} = require("../db/authorDb");
const { messages } = require("../utils/utils");
const successsTemplate = require("../templates/successTemplate");
const { findBook } = require("../db/bookDb");

const postAuthorHandler = async (req, res) => {
  try {
    const author = new Author();
    const newAuthor = Object.assign(author, req.body);
    const getAuthor = await findAuthor(
      { name: req.body.name, book: req.body.book },
      "-__v"
    );
    const getBook = await findBook({ _id: req.body.book }, "-__v");
    if (getAuthor) {
      throw new Error(messages.author_exists);
    }

    if (!getBook) {
      throw new Error(messages.book_not_found);
    }

    const savedAuthor = Object.assign(newAuthor, {
      _id: new mongoose.Types.ObjectId(),
    });
    const result = await saveAuthor(savedAuthor);
    successsTemplate(res, result, messages.author_saved, 201);
  } catch (error) {
    errorTemplate(res, error, error.message);
  }
};

const getAuthorHandler = async (req, res) => {
  try {
    const author = await findAuthor({ _id: req.params.authorId }, "-__v");
    if (!author) {
      throw new Error(messages.author_not_found);
    } else {
      successsTemplate(res, author, messages.author_found, 200);
    }
  } catch (error) {
    errorTemplate(res, error, messages.author_error);
  }
};

const getAuthorsHandler = async (req, res) => {
  try {
    const authors = await findAuthors({}, "-__v");
    successsTemplate(res, authors, messages.authors_found, 200);
  } catch (error) {
    errorTemplate(res, error, messages.authors_not_found);
  }
};

const updateAuthorHandler = async (req, res) => {
  try {
    const result = await updateAuthor({ _id: req.params.authorId }, req.body);
    successsTemplate(res, result, messages.author_updated, 200);
  } catch (error) {
    errorTemplate(res, error, messages.author_not_updated);
  }
};

const deleteAuthorHandler = async (req, res) => {
  try {
    const result = await deleteAuthor({ _id: req.params.authorId });
    successsTemplate(res, result, messages.author_deleted, 200);
  } catch (error) {
    errorTemplate(res, error, messages.author_not_deleted);
  }
};

module.exports = {
  postAuthorHandler,
  getAuthorHandler,
  getAuthorsHandler,
  updateAuthorHandler,
  deleteAuthorHandler,
};
