const { By, until } = require("selenium-webdriver");
const {
  init,
  die,
  getUrl,
  testTitle,
  setDelay,
  registerUser,
  loginUser,
  addBook,
  editBook,
} = require("./helpers/initialization");

describe("Test Frontend for Book store", () => {
  jest.setTimeout(100000); // Timeout set to 10 seconds

  let driver, firstName, bookTitle;
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

  it("As a user I want to click and view the add book page", async () => {
    const addbookBtnElement = await driver.findElement(By.id("add-book"));
    await setDelay();
    await addbookBtnElement.click();
    await setDelay();
    await driver.wait(until.titleContains("Add a book"), 4000);
    const title = await testTitle();
    expect(title).toEqual("Add a book");
    const formHeader = await driver.findElement(By.id("formHeader")).getText();
    expect(formHeader).toEqual("Add Book!");
    await setDelay();
  });

  it("As a user I want to be able to add a book", async () => {
    bookTitle = await addBook();
    await driver.wait(until.titleContains("Add a book"), 2000);
    const title = await testTitle();
    expect(title).toEqual("Add a book");
    const message = await driver.findElement(By.id("message")).getText();
    expect(message).toEqual("Book saved successfully");
    await setDelay();
  });

  it("As a user I want to click and view the edit book page", async () => {
    const bookElement = await driver.findElement(By.id("books"));
    await setDelay();
    await bookElement.click();
    await driver.wait(until.titleContains("Books"), 4000);
    const editBookBtnElement = await driver.findElements(
      By.className("edit-link")
    );
    if (editBookBtnElement.length > 0) {
      const lastBookBtn = editBookBtnElement[editBookBtnElement.length - 1];
      await setDelay();

      //await lastBookBtn.click();
      await driver.executeScript("arguments[0].click();", lastBookBtn);

      await setDelay();
      await driver.wait(until.titleContains("Edit book"), 4000);
      const title = await testTitle();
      expect(title).toEqual("Edit book");
      const formHeader = await driver
        .findElement(By.id("formHeader"))
        .getText();
      expect(formHeader).toEqual("Edit Book!");
    } else {
      console.log("No book found.");
    }
    await setDelay();
  });

  it("As a user I want to be able to update a book", async () => {
    await editBook();
    await driver.wait(until.titleContains("Edit book"), 4000);
    const title = await testTitle();
    expect(title).toEqual("Edit book");
    const message = await driver.findElement(By.id("message")).getText();
    expect(message).toEqual("Book updated successfully.");
    await setDelay();
  });

  it("As a user I want to be able to view the authors page", async () => {
    const authorsNavElement = await driver.findElement(By.id("authors"));
    await setDelay();
    await authorsNavElement.click();
    await driver.wait(until.titleContains("Authors"), 4000);
    const title = await testTitle();
    expect(title).toEqual("Authors");
    await setDelay();
  });

  it("As a user I want to be able to view the add authors page", async () => {
    const addAuthorsBtn = await driver.findElement(By.id("addAuthorBtn"));
    await setDelay();
    await addAuthorsBtn.click();
    await driver.wait(until.titleContains("Add an Author"));
    const title = await testTitle();
    expect(title).toEqual("Add an Author");
    const formHeader = await driver.findElement(By.id("formHeader")).getText();
    expect(formHeader).toEqual("Add Author!");
    await setDelay();
  });
});
