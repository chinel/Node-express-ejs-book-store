const messages = {
  book_not_found: "Book not found.",
  book_error: "Unable to get book.",
  book_found: "Successful book.",
  books_found: "Successful Books.",
  books_not_found: "Unable to get books.",
  book_saved: "Book Saved.",
  book_not_saved: "Book not saved.",
  book_exists: "Book already exists.",
  book_not_updated: "Unable to update book.",
  book_updated: "Book updated.",
  book_deleted: "Book deleted.",
  book_not_deleted: "Book not deleted.",
  author_exists: "Author already exists.",
  author_saved: "Author Saved.",
  author_not_saved: "Unable to save author",
  author_found: "Successful author.",
  author_not_found: "Author not found.",
  author_error: "Unable to get author",
  authors_found: "Successful authors",
  authors_not_found: "Unable to get authors.",
  author_updated: "Author updated.",
  author_deleted: "Author deleted.",
  author_not_updated: "Unable to update author.",
  author_not_deleted: "Unable to delete author",
  auth_failed: "Authentication Failed",
};

const generateGUID = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

module.exports = { messages, generateGUID };
