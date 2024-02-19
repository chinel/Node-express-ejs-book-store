const validateRegistration = (body) => {
  let errors = {};
  const {
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    email,
    password,
    confirmPassword,
  } = body;
  console.log(body);
  if (firstName.trim().length < 2 || !/^[A-Za-z]+$/.test(firstName.trim())) {
    errors.firstNameMsg = "First Name is required";
  }

  if (lastName.trim().length < 2 || !/^[A-Za-z]+$/.test(lastName.trim())) {
    errors.lastNameMsg = "Last Name is required";
  }

  if (
    address.trim().length < 3 ||
    !/^[\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.']+$/.test(address.trim())
  ) {
    errors.addressMsg = "Address must be 3 characters or more";
  }

  if (city.trim().length < 2 || !/^[A-Za-z]+$/.test(city.trim())) {
    errors.cityMsg = "City is required";
  }

  if (state.trim().length < 2 || !/^[A-Za-z]+$/.test(state.trim())) {
    errors.stateMsg = "State must be 2 characters";
  }

  if (!/^\d{5}$/.test(zipCode.trim())) {
    errors.zipCodeMsg = "Zip Code format is 12345";
  }

  if (
    email.trim() === "" ||
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())
  ) {
    errors.emailMsg = "Invalid Email Address";
  }

  if (
    password.trim().length === 0 ||
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.trim())
  ) {
    errors.passwordMsg =
      "Password must contain a letters and numbers 8 characters or more";
  }

  if (confirmPassword.trim() !== password.trim()) {
    errors.confirmPasswordMsg = "Passwords must be the same";
  }

  return errors;
};

module.exports = {
  validateRegistration,
};
