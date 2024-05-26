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
      author: "Mandy Patter",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    },
    {
      _id: new mongoose.Types.ObjectId(),
      title: `How to run a business ${generateGUID()}`,
      author: "Mandy Patter",
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
    author: "Mandy Patter",
    ISBN: "10-999922-29304",
    numberOfPages: "200",
    price: 200,
    yearPublished: "2024",
  });
};

module.exports = { saveBook, findBooks, findBook };
