const crypto = require("crypto");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { Select } = require("selenium-webdriver/lib/select");

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
  confirmPassword,
  bookTitle;

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

const addBook = async () => {
  const titleElement = await driver.findElement(By.name("title"));
  bookTitle = `A day in the life ${randNum()}`;
  await titleElement.sendKeys(bookTitle, Key.TAB);

  const ISBNElement = await driver.findElement(By.id("ISBN"));
  const ISBN = "10-999922-29334";
  await ISBNElement.sendKeys(ISBN, Key.TAB);

  const numberPagesElement = await driver.findElement(By.id("numberOfPages"));
  const numberOfPages = 200;
  await numberPagesElement.sendKeys(numberOfPages, Key.TAB);

  const priceElement = await driver.findElement(By.id("price"));
  const price = 300;
  await priceElement.sendKeys(price, Key.TAB);

  const yearElement = await driver.findElement(By.id("yearPublished"));
  const year = 2003;
  await yearElement.sendKeys(year, Key.TAB);

  const authorElement = await driver.findElement(By.id("author"));
  const selectDropdown = new Select(authorElement);
  await selectDropdown.selectByIndex(1); // index starts from 0
  await authorElement.sendKeys(Key.TAB);

  const buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  await buttonElement.click();
  await setDelay();
  return bookTitle;
};

const editBook = async () => {
  const titleElement = await driver.findElement(By.name("title"));
  bookTitle = `A day in the life ${randNum()}`;
  await titleElement.clear(); // this clears the input element
  await titleElement.sendKeys(bookTitle, Key.TAB);

  const ISBNElement = await driver.findElement(By.id("ISBN"));
  const ISBN = "10-999922-29134";
  await ISBNElement.clear();
  await ISBNElement.sendKeys(ISBN, Key.TAB);

  const numberPagesElement = await driver.findElement(By.id("numberOfPages"));
  const numberOfPages = 199;
  await numberPagesElement.clear();
  await numberPagesElement.sendKeys(numberOfPages, Key.TAB);

  const priceElement = await driver.findElement(By.id("price"));
  const price = 299;
  await priceElement.clear();
  await priceElement.sendKeys(price, Key.TAB);

  const yearElement = await driver.findElement(By.id("yearPublished"));
  const year = 2004;
  await yearElement.clear();
  await yearElement.sendKeys(year, Key.TAB);

  const authorElement = await driver.findElement(By.id("author"));
  const selectDropdown = new Select(authorElement);
  await selectDropdown.selectByIndex(2); // index starts from 0
  await authorElement.sendKeys(Key.TAB);

  const buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  await buttonElement.click();
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
  addBook,
  editBook,
};
