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

const sendPayload = async (element, payload) => {
  const inputElement = await driver.findElement(By.id(element));
  await inputElement.clear();
  await inputElement.sendKeys(payload, Key.TAB);
};

const registerUser = async () => {
  firstName = "Jane";
  await sendPayload("firstName", firstName);

  lastName = "Doe";
  await sendPayload("lastName", lastName);

  address = "Main St 123";
  await sendPayload("address", address);

  state = "Lagos";
  await sendPayload("state", state);

  city = "MainCity";
  await sendPayload("city", city);

  zipCode = "100001";
  await sendPayload("zipCode", zipCode);

  email = `nelokwaz+new${randNum()}@gmail.com`;
  await sendPayload("email", email);

  password = "PAssword123";
  await sendPayload("password", password);

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

  await sendPayload("email", email);
  await sendPayload("password", password);

  let buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  buttonElement.sendKeys(Key.ENTER);
  //buttonElement.click(); or this works as well
  await setDelay();
};

const addBook = async () => {
  bookTitle = `A day in the life ${randNum()}`;
  await sendPayload("title", bookTitle);
  // const titleElement = await driver.findElement(By.name("title"));
  // await titleElement.sendKeys(bookTitle, Key.TAB);
  await sendPayload("ISBN", "10-999922-29334");
  await sendPayload("numberOfPages", 200);
  await sendPayload("price", 300);
  await sendPayload("yearPublished", 2003);

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
  bookTitle = `A day in the life ${randNum()}`;
  await sendPayload("title", bookTitle);
  await sendPayload("ISBN", "10-999922-29134");
  await sendPayload("numberOfPages", 199);
  await sendPayload("price", 299);
  await sendPayload("yearPublished", 2004);

  const authorElement = await driver.findElement(By.id("author"));
  const selectDropdown = new Select(authorElement);
  await selectDropdown.selectByIndex(2); // index starts from 0
  await authorElement.sendKeys(Key.TAB);

  const buttonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  await buttonElement.click();
  await setDelay();
};

const addAuthor = async () => {
  await sendPayload("name", `Peter Doe ${randNum()}`);
  await sendPayload("publisher", "Pearson Publishers");
  await sendPayload("website", "www.peterdoe.com");
  await sendPayload("twitter", "@peter");
  const aboutElement = await driver.findElement(By.name("about"));
  await aboutElement.sendKeys(
    "I am an author based in Luxemborg. With over 50 books published",
    Key.TAB
  );
  // await sendPayload(
  //   "about",
  //   "I am an author based in Luxemborg. With over 50 books published"
  // );

  const submitButtonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  await submitButtonElement.click();
  await setDelay();
};

const editAuthor = async () => {
  await sendPayload("name", `Peter Doe ${randNum()}`);
  await sendPayload("publisher", "Pearson Publishers!");
  await sendPayload("website", "www.peterdoe.org");
  await sendPayload("twitter", "@peterd");
  const aboutElement = await driver.findElement(By.name("about"));
  await aboutElement.clear();
  await aboutElement.sendKeys(
    "I am an author based in Austria. With over 500 books published",
    Key.TAB
  );
  // await sendPayload(
  //   "about",
  //   "I am an author based in Austria. With over 500 books published"
  // );

  const submitButtonElement = await driver.findElement(By.id("submitButton"));
  await setDelay();
  await submitButtonElement.click();
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
  addAuthor,
  editAuthor,
};
