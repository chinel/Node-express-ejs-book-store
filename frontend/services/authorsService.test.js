const { getAllAuthors, getAuthor } = require("./authorsService");

jest.mock("./authorsService");
describe("Test Author Service calls backend", () => {
  test("Should get an author by ID", async () => {
    const authorId = "66815b77da021e230b639a27";
    const author = await getAuthor(authorId);
    expect(author._id).toEqual(authorId);
    expect(author.name).toEqual("Harry Doe");
    expect(author.website).toEqual("www.harry.com");
    expect(author.about).toEqual("I am an author with 700 books published");
    expect(author.twitter).toEqual("@harry");
    expect(author.publisher).toEqual("Parker Publishers");
  });
  test("Should get all authors", async () => {
    const result = await getAllAuthors();

    const authors = result.data.result;

    expect(authors[0]._id).toEqual("66644b4f816d507fe43aa433");
    expect(authors[0].name).toEqual(
      "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7"
    );
    expect(authors[0].publisher).toEqual("Pearson Publisher corp");
    expect(authors[0].about).toEqual(
      "A highly sophisticated author, New york's best seller."
    );
    expect(authors[0].website).toEqual("https://google.com");
    expect(authors[0].twitter).toEqual("");
  });
  test("Should save a new author", () => {});
  test("Should edit an author by ID", () => {});
  test("Should delete an author by ID", () => {});
});
