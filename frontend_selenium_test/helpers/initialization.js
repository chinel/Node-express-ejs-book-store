const crypto = require("crypto");
const { Builder, By, Key, until } = require("selenium-webdriver");
require("dotenv").config();
let driver,
  firstName,
  lastName,
  address,
  city,
  state,
  zipCode,
  email,
  password,
  confirmPassword;

const init = () => {
  driver = new Builder().forBrowser("chrome").build(); //this will build a driver for us
  driver.manage().window().maximize();
  return driver;
};

const die = () => {
  driver.quit();
};

const getUrl = async () => {
  await driver.get(process.env.URL);
};

const setDelay = async () => {
  await driver.sleep(5000); // in milliseconds
};

const testTitle = async () => {
  return await driver.getTitle();
};

const randNum = () => {
  return Math.ceil(Math.random() * 100000);
};

const registerUser = async () => {
  const firstNameElement = await driver.findElement(By.name("firstName"));
  firstName = "Jane";
  await firstNameElement.sendKeys(firstName, Key.TAB);

  const lastNameElement = await driver.findElement(By.name("lastName"));
  lastName = "Doe";
  lastNameElement.sendKeys(lastName, Key.TAB);

  const addressElement = await driver.findElement(By.name("address"));
  address = "Main St 123";
  addressElement.sendKeys(address, Key.TAB);

  const stateElement = await driver.findElement(By.name("state"));
  state = "Lagos";
  await stateElement.sendKeys(state, Key.TAB);

  const cityElement = await driver.findElement(By.name("city"));
  city = "MainCity";
  await cityElement.sendKeys(city, Key.TAB);

  const zipCodeElement = await driver.findElement(By.name("zipCode"));
  zipCode = "100001";
  await zipCodeElement.sendKeys(zipCode, Key.TAB);

  const emailElement = await driver.findElement(By.name("email"));
  email = `nelokwaz+new${randNum()}@gmail.com`;
  await emailElement.sendKeys(email, Key.TAB);

  const passwordElement = await driver.findElement(By.name("password"));
  password = "PAssword123";
  await passwordElement.sendKeys(password, Key.TAB);

  const confirmPasswordElement = await driver.findElement(
    By.name("confirmPassword")
  );
  confirmPassword = "PAssword123";
  await confirmPasswordElement.sendKeys(confirmPassword, Key.TAB);

  let buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  buttonElement.click();
  await setDelay();
  return firstName;
};

const loginUser = async () => {
  const loginElement = await driver.findElement(By.id("login"));
  loginElement.click();
  await driver.wait(until.titleContains("Login"), 2000);
  const emailElement = await driver.findElement(By.name("email"));
  await emailElement.sendKeys(email, Key.TAB);

  const passwordElement = await driver.findElement(By.name("password"));
  await passwordElement.sendKeys(password, Key.TAB);

  let buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  buttonElement.sendKeys(Key.ENTER);
  //buttonElement.click(); or this works as well
  await setDelay();
};

module.exports = {
  init,
  die,
  getUrl,
  setDelay,
  testTitle,
  registerUser,
  loginUser,
};
