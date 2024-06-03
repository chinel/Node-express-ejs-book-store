const errorTemplate = (res, page, pageTitle, errors, message,  body) => {
  res.render(page, {
    pageTitle,
    errors,
    body,
    message,
  });
};

module.exports = errorTemplate;
