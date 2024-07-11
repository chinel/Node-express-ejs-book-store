const { By, until } = require("selenium-webdriver");
const {
  init,
  die,
  getUrl,
  testTitle,
  setDelay,
  registerUser,
  loginUser,
} = require("./helpers/initialization");

describe("Test Frontend for Book store", () => {
  jest.setTimeout(100000); // Timeout set to 10 seconds

  let driver, firstName;
  beforeAll(() => {
    driver = init();
  });

  afterAll(() => {
    die();
  });

  it("As a user I want to open the home page", async () => {
    await getUrl();
    const title = await testTitle();
    expect(title).toEqual("Home");
    await setDelay();
  });

  it("As a user I should be able to view the registration page.", async () => {
    let registerElement = await driver.findElement(By.name("register"));
    await registerElement.click();
    await driver.wait(until.titleContains("Register"), 2000);
    const title = await testTitle();
    expect(title).toEqual("Register");
    await setDelay();
  });

  it("As a user I should be able to register on the website.", async () => {
    firstName = await registerUser();
    await driver.wait(until.titleContains("Login"), 2000);
    const title = await testTitle();
    expect(title).toEqual("Login");
    const message = await driver.findElement(By.id("message")).getText();
    expect(message).toEqual("Registration Successful");
    await setDelay();
  });

  it("As a user I should be able to login to the website", async () => {
    await loginUser();
    await driver.wait(until.titleContains("Home"));
    const title = await testTitle();
    expect(title).toEqual("Home");
    const message = await driver.findElement(By.id("greeting")).getText();
    await setDelay();
    expect(message).toEqual(`Welcome ${firstName}`);
    await setDelay();
  });

  it("As a user I want to click and view the books page", async () => {
    const bookElement = await driver.findElement(By.id("books"));
    await bookElement.click();
    await driver.wait(until.titleContains("Books"), 2000);
    const title = await testTitle();
    expect(title).toEqual("Books");
    await setDelay();
  });

  it("As a user I want to click and view the add books page", async () => {
    const addbookBtnElement = await driver.findElement(By.id("add-book"));
    await setDelay();
    await addbookBtnElement.click();
    await setDelay();
    await driver.wait(until.titleContains("Add a book"), 4000);
    const title = await testTitle();
    const bookTitle = await driver.findElement(By.id("title")).getText();
    expect(title).toEqual("Add a book");
    expect(bookTitle).toEqual("Add Book!");
    await setDelay();
  });
});
