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
  test("Find a specific author", async () => {
    const author = await findAuthor({ _id: new mongoose.Types.ObjectId() });
    expect(mongoose.Types.ObjectId.isValid(author._id)).toBe(true);
    expect(author.name).toContain("James doe");
    expect(mongoose.Types.ObjectId.isValid(author.book)).toBe(true);
    expect(author.publisher).toEqual("Pearson Publisher");
    expect(author.about).toEqual(
      "A highly sophisticated author, New york's best seller."
    );
    expect(author.website).toEqual("https://google.com");
  });
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
  test("Update author", async () => {
    const result = await updateAuthor(
      { _id: new mongoose.Types.ObjectId() },
      { name: "Ann Doe" }
    );
    expect(result.acknowledged).toBe(true);
    expect(result.modifiedCount).toEqual(1);
    expect(result.upsertedId).toEqual(null);
    expect(result.upsertedCount).toEqual(0);
    expect(result.matchedCount).toEqual(1);
  });
  test("Delete Author", async () => {
    const result = await deleteAuthor({ _id: new mongoose.Types.ObjectId() });
    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toEqual(1);
  });
});
