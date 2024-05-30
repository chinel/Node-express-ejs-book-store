const mongoose = require("mongoose");

const saveAuthor = (obj) => {
  return Promise.resolve({
    ...obj._doc,
  });
};

module.exports = { saveAuthor };
