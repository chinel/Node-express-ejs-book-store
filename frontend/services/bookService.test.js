const {
  getAllBooks,
  addBook,
  getBook,
  editBook,
  deleteBook,
} = require("./booksService");

jest.mock("./booksService");

describe("Test Book Service calls backend", () => {
  test("Should get all books", async () => {
    const books = await getAllBooks();
    const result = books.data.result;
    expect(result[0].title).toEqual("How to eat 40");
    expect(result[0].author.name).toEqual(
      "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7"
    );
    expect(result[0].ISBN).toEqual("10-999922-29356");
    expect(result[0].numberOfPages).toEqual("200");
    expect(result[0].price).toEqual(200);
    expect(result[0].yearPublished).toEqual("2022");
    expect(result[0]._id).toEqual("6664517afdcac6f46d6c34f9");
  });
  test("Should get a specific book by id", async () => {
    const bookId = "6664517afdcac6f46d6c34f9";
    const result = await getBook(bookId);
    const book = result.data.result;
    expect(book.title).toEqual("How to eat 40");
    expect(book.author.name).toEqual(
      "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7"
    );
    expect(book.ISBN).toEqual("10-999922-29356");
    expect(book.numberOfPages).toEqual("200");
    expect(book.price).toEqual(200);
    expect(book.yearPublished).toEqual("2022");
  });
  test("Should add a book", async () => {
    const book = {
      title: "How to run a business 98933046-df84-4a92-bed4-88d0a2249e80",
      author: "66644b4f816d507fe43aa433",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    };

    const result = await addBook(book);
    const data = result.data.result;
    const message = result.data.message;
    expect(data.title).toEqual(book.title);
    expect(data.author).toEqual(book.author);
    expect(data.ISBN).toEqual(book.ISBN);
    expect(data.numberOfPages).toEqual(book.numberOfPages);
    expect(data.price).toEqual(book.price);
    expect(data.yearPublished).toEqual(book.yearPublished);
    expect(data._id.length).toEqual(24);
    expect(message).toEqual("Book Saved.");
  });
  test("Should edit a book by Id", async () => {
    const book = {
      id: "6678188839bdf15d24c8eabd",
      title: "How to run a business 98933046-df84-4a92-bed4-88d0a2249e80",
      author: "66644b4f816d507fe43aa433",
      ISBN: "10-999922-29304",
      numberOfPages: "200",
      price: 200,
      yearPublished: "2024",
    };

    const result = await editBook(book);

    const data = result.data.result;
    const message = result.data.message;

    expect(data.acknowledged).toBe(true);
    expect(data.modifiedCount).toEqual(1);
    expect(data.upsertedId).toEqual(null);
    expect(data.upsertedCount).toEqual(0);
    expect(data.matchedCount).toEqual(1);
    expect(message).toEqual("Book updated.");
  });
  test("Should delete a book by Id", async () => {
    const bookId = "6664517afdcac6f46d6c34f9";
    const result = await deleteBook(bookId);
    const data = result.data.result;
    const message = result.data.message;

    expect(data.acknowledged).toBe(true);
    expect(data.deletedCount).toEqual(1);

    expect(message).toEqual("Book deleted.");
  });
});
