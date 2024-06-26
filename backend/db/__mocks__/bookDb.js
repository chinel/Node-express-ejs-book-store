const mongoose = require("mongoose");
const { generateGUID } = require("../../utils/utils");
const saveBook = (obj) => {
  return Promise.resolve({
    ...obj._doc,
  });
};

const findBooks = (obj, selectValues) => {
  return Promise.resolve([
    {
      _id: new mongoose.Types.ObjectId(),
      title: `How to run a business ${generateGUID()}`,
      author: "66644b4f816d507fe43aa433",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: `How to run a business ${generateGUID()}`,
      author: "66644b4f816d507fe43aa433",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    },
  ]);
};
const findBook = (obj, selectValues) => {
  return Promise.resolve({
    _id: new mongoose.Types.ObjectId(),
    title: `How to run a business ${generateGUID()}`,
    author: "66644b4f816d507fe43aa433",
    ISBN: "10-999922-29304",
    numberOfPages: "200",
    price: 200,
    yearPublished: "2024",
  });
};

const updateBook = (obj, selectValues) => {
  return Promise.resolve({
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  });
};

const deleteBook = (obj, selectValues) => {
  return Promise.resolve({
    acknowledged: true,
    deletedCount: 1,
  });
};

module.exports = { saveBook, findBooks, findBook, updateBook, deleteBook };
