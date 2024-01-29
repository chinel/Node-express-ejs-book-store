const errorTemplate = (res, err, message) => {
  return res.status(err.status || 501).json({
    error: {
      message: message,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
