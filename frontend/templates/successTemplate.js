const successsTemplate = (res, page, pageTitle, message, session, data) => {
  res.render(page, {
    pageTitle,
    message,
    session,
    data,
  });
};
module.exports = successsTemplate;
