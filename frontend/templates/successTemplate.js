const successsTemplate = (res, page, pageTitle, message, session) => {
  res.render(page, {
    pageTitle,
    message,
    session,
  });
};
module.exports = successsTemplate;
