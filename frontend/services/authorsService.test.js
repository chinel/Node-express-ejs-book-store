const {
  getAllAuthors,
  getAuthor,
  postAuthor,
  editAuthor,
  deleteAuthor,
} = require("./authorsService");

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
  test("Should save a new author", async () => {
    const author = {
      name: "Peter Doe",
      website: "www.peter.com",
      about: "I am an author from with PHD",
      twitter: "",
      publisher: "Limited Publishers",
    };
    const response = await postAuthor(author);
    const result = response.data.result;
    const message = response.data.message;

    expect(result.name).toEqual(author.name);
    expect(result.website).toEqual(author.website);
    expect(result.about).toEqual(author.about);
    expect(result.twitter).toEqual(author.twitter);
    expect(result._id).toEqual("6678188839bdf15d24c8eafg");
    expect(message).toEqual("Author Saved.");
  });
  test("Should edit an author by ID", async () => {
    const author = {
      name: "Peter Doe 101",
      website: "www.peter.com",
      about: "I am an author from with PHD",
      twitter: "",
      publisher: "Limited Publishers!!!!",
      _id: "6678188839bdf15d24c8eafg",
    };
    const response = await editAuthor(author);
    const result = response.data.result;
    const message = response.data.message;

    expect(result.acknowledged).toBe(true);
    expect(result.modifiedCount).toEqual(1);
    expect(result.upsertedId).toBe(null);
    expect(result.upsertedCount).toEqual(0);
    expect(result.matchedCount).toEqual(1);
    expect(message).toBe("Author updated.");
  });
  test("Should delete an author by ID", async () => {
    const authorId = "6678188839bdf15d24c8eafg";

    const response = await deleteAuthor(authorId);
    const result = response.data.result;
    const message = response.data.message;

    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toEqual(1);
    expect(message).toEqual("Author deleted.");
  });
});
