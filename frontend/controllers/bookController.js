const successsTemplate = require("../templates/successTemplate");

const getBooksHandler = (req, res) => {
  const session = req.session;

  successsTemplate(res, "books", "Books", null, session);
};

module.exports = { getBooksHandler };
