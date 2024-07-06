const { Builder } = require("selenium-webdriver");
require("dotenv").config();
let driver;

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
  await driver.sleep(2000); // in milliseconds
};

const testTitle = async () => {
  return await driver.getTitle();
};

module.exports = { init, die, getUrl, setDelay, testTitle };
