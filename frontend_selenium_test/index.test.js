const { By, until } = require("selenium-webdriver");
const {
  init,
  die,
  getUrl,
  testTitle,
  setDelay,
  registerUser,
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
    const title = await testTitle("Home");
    expect(title).toEqual("Home");
    await setDelay();
  });

  it("As a user I should be able to view the registration page.", async () => {
    let registerElement = await driver.findElement(By.name("register"));
    await registerElement.click();
    await driver.wait(until.titleContains("Register"), 2000);
    const title = await testTitle("Register");
    expect(title).toEqual("Register");
    await setDelay();
  });

  it("As a user I should be able to register on the website.", async () => {
    firstName = await registerUser();
    await setDelay();
  });
});
