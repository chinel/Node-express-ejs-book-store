const mongoose = require("mongoose");
const { generateGUID } = require("../../utils/utils");

const saveAuthor = (obj) => {
  return Promise.resolve({
    ...obj._doc,
  });
};

const findAuthors = (obj, selectedValues) => {
  const guid = generateGUID();

  return Promise.resolve([
    {
      _id: new mongoose.Types.ObjectId(),
      name: `James doe ${guid}`,
      book: "6650c393bbcb5015689c4edd",
      publisher: "Pearson Publisher",
      about: "A highly sophisticated author, New york's best seller.",
      website: "https://google.com",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      name: `James doe ${guid}`,
      book: "6650c393bbcb5015689c4edd",
      publisher: "Pearson Publisher",
      about: "A highly sophisticated author, New york's best seller.",
      website: "https://google.com",
    },
  ]);
};

const findAuthor = (obj, selectedValues) => {
  const guid = generateGUID();

  return Promise.resolve({
    _id: new mongoose.Types.ObjectId(),
    name: `James doe ${guid}`,
    book: "6650c393bbcb5015689c4edd",
    publisher: "Pearson Publisher",
    about: "A highly sophisticated author, New york's best seller.",
    website: "https://google.com",
  });
};

const updateAuthor = (filter, update) => {
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  });
};

module.exports = { saveAuthor, findAuthors, findAuthor, updateAuthor };
