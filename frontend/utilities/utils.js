const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const messages = {
  successful_registration: "Registration Successful",
  successful_login: "Login Successful",
  failed_login: "Login Failed",
  failed_registration: "Registration Failed",
  get_books_failed: "Unable to get books.",
};
module.exports = {
  isEmpty,
  messages,
};
