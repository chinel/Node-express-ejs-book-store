const mongoose = require("mongoose");
const Author = require("../models/authorModel");
const errorTemplate = require("../templates/errorTemplate");
const { findAuthor, saveAuthor } = require("../db/authorDb");
const { messages } = require("../utils/utils");
const successsTemplate = require("../templates/successTemplate");

const postAuthorHandler = async (req, res) => {
  try {
    const author = new Author();
    const newAuthor = Object.assign(author, req.body);
    const getAuthor = await findAuthor(
      { name: req.body.name, book: req.body.book },
      "-__v"
    );
    if (getAuthor) {
      throw new Error(messages.author_exists);
    } else {
      const savedAuthor = Object.assign(newAuthor, {
        _id: new mongoose.Types.ObjectId(),
      });
      const result = await saveAuthor(savedAuthor);
      successsTemplate(res, result, messages.author_saved, 201);
    }
  } catch (error) {
    errorTemplate(res, error, error.message);
  }
};

module.exports = { postAuthorHandler };
