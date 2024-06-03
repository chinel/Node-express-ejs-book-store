const successsTemplate = (res, page, pageTitle, message, body) => {
  res.render(page, {
    pageTitle,
    message,
    body,
  });
};
module.exports = successsTemplate;
