const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const messages = {
  successful_registration: "Registration Successful",
  successful_login: "Login Successful",
  failed_login: "Login Failed",
  failed_registration: "Registration Failed",
};
module.exports = {
  isEmpty,
  messages,
};
