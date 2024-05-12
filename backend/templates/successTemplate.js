const successsTemplate = (res, result, message, status, bools, token) => {
  return res.status(status).json({
    message,
    result,
    logged: bools,
    token,
  });
};

module.exports = successsTemplate;
