const errorTemplate = (res, err, message) => {
  return res.status(err.status || 500).json({
    error: {
      message: message,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
