const mongoose = require("mongoose");
const Book = require("../models/bookModel");
const { generateGUID } = require("../utils/utils");
const {
  saveBook,
  findBooks,
  findBook,
  updateBook,
  deleteBook,
} = require("./bookDb");

jest.mock("./bookDb");

describe("Book Test Suite", () => {
  test("Find all books", async () => {
    const books = await findBooks({});
    expect(mongoose.Types.ObjectId.isValid(books[0]._id)).toBe(true);
    expect(books[0].title).toContain(`How to run a business`);
    expect(books[0].author).toEqual("Mandy Patter");
    expect(books[0].ISBN).toEqual("10-999922-29304");
    expect(books[0].numberOfPages).toEqual("200");
    expect(books[0].price).toEqual(200);
    expect(books[0].yearPublished).toEqual("2024");
  });

  test("Find a specific book", async () => {
    const book = await findBook({ _id: new mongoose.Types.ObjectId() });
    expect(mongoose.Types.ObjectId.isValid(book._id)).toBe(true);
    expect(book.title).toContain(`How to run a business`);
    expect(book.author).toEqual("Mandy Patter");
    expect(book.ISBN).toEqual("10-999922-29304");
    expect(book.numberOfPages).toEqual("200");
    expect(book.price).toEqual(200);
    expect(book.yearPublished).toEqual("2024");
  });

  test("Save book", async () => {
    const guid = generateGUID();
    const book = {
      _id: new mongoose.Types.ObjectId(),
      title: `How to run a business ${guid}`,
      author: "Mandy Patter",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    };
    const newBook = new Book(book);

    const result = await saveBook(newBook);
    expect(result._id).toEqual(book._id);
    expect(result.title).toEqual(`How to run a business ${guid}`);
    expect(result.author).toEqual(book.author);
    expect(result.ISBN).toEqual(book.ISBN);
    expect(result.numberOfPages).toEqual(book.numberOfPages);
    expect(result.price).toEqual(book.price);
    expect(result.yearPublished).toEqual(book.yearPublished);
  });

  test("Update book", async () => {
    const result = await updateBook();
    expect(result.acknowledged).toBe(true);
    expect(result.modifiedCount).toEqual(1);
    expect(result.upsertedId).toBe(null);
    expect(result.upsertedCount).toEqual(0);
    expect(result.matchedCount).toEqual(1);
  });

  test("Delete book", async () => {
    const result = await deleteBook({ _id: new mongoose.Types.ObjectId() });
    expect(result.acknowledged).toBe(true);
    expect(result.deletedCount).toEqual(1);
  });
});
