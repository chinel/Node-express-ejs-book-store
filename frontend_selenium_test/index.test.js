const {
  init,
  die,
  getUrl,
  testTitle,
  setDelay,
} = require("./helpers/initialization");

describe("Test Frontend for Book store", () => {
  jest.setTimeout(10000); // Timeout set to 10 seconds

  let driver;
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
});
