const successsTemplate = (
  res,
  page,
  pageTitle,
  message,
  session,
  data = null
) => {
  res.render(page, {
    pageTitle,
    message,
    session,
    data,
  });
};
module.exports = successsTemplate;
