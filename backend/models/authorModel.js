const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
