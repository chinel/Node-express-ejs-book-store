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
  test("Find all authors", () => {});
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
