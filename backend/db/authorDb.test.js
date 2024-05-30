const mongoose = require("mongoose");
const Author = require("../models/authorModel");
const {
  saveAuthor,
  findAuthors,
  findAuthor,
  updateAuthor,
  deleteAuthor,
} = require("./authorDb");
const { generateGUID } = require("../utils/utils");
jest.mock("./authorDb");

describe("Author Test Suite", () => {
  test("Find all authors", async () => {
    const authors = await findAuthors({});

    expect(mongoose.Types.ObjectId.isValid(authors[0]._id)).toBe(true);
    expect(authors[0].name).toContain(`James doe`);
    expect(mongoose.Types.ObjectId.isValid(authors[0].book)).toBe(true);
    expect(authors[0].publisher).toEqual("Pearson Publisher");
    expect(authors[0].about).toEqual(
      "A highly sophisticated author, New york's best seller."
    );
    expect(authors[0].website).toEqual("https://google.com");
  });
  test("Find a specific author", () => {});
  test("Create new author", async () => {
    const guid = generateGUID();

    const author = {
      _id: new mongoose.Types.ObjectId(),
      name: `James doe ${guid}`,
      book: "6650c393bbcb5015689c4edd",
      publisher: "Pearson Publisher",
      about: "A highly sophisticated author, New york's best seller.",
      website: "https://google.com",
    };
    const newAuthor = new Author(author);

    const result = await saveAuthor(newAuthor);

    expect(mongoose.Types.ObjectId.isValid(result._id)).toBe(true);
    expect(result.name).toEqual(author.name);
    expect(mongoose.Types.ObjectId.isValid(result.book)).toBe(true);
    expect(result.publisher).toEqual(author.publisher);
    expect(result.about).toEqual(author.about);
    expect(result.website).toEqual(author.website);
  });
  test("Update author", () => {});
  test("Delete Author", () => {});
});
